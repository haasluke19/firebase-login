import React from "react";
import "./App.css";
import { auth } from "./firebase/init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import Nav from "./components/Nav";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [isUser, setIsUser] = React.useState(false)
  
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user);
        setIsUser(true)
      }
      else {
        setUser({})
        setIsUser(false)
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    signOut(auth);
  }

  return (
    <div className="App">
      <Nav register={register} login={login} logout={logout} isUser={isUser} email={user.email}/>
      {loading ? "loading..." : user.email}
    </div>
  );
}

export default App;
