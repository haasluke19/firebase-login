import React from 'react'

export default function Nav({register, login, logout, isUser, email}) {
  return (
    <nav>
      <div className="logo">Logo Placeholder</div>
      <div className="button__container">
        { isUser ? 
            <button className='logout__button' onClick={logout}>{email.slice(0,1).toUpperCase()}</button>
          :
          <>
            <button className='login__button' onClick={login}>Login</button>
            <button className='register__button' onClick={register}>Register</button>
          </>
        }
      </div>
    </nav>
  )
}
