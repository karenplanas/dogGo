import React from 'react'

const LoginScreen : React.FC = () => {
  return (
    <div className='LoginScreen-container'>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name="email"/>
        <label htmlFor='password'>Password</label>
        <input type="password" name='password'/>
        <button>Login</button>
      </form>
    </div>
  )
}

export { LoginScreen }