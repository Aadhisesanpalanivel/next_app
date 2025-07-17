"use client"

import { signIn } from 'next-auth/react';

const Login = () => {

  return (
    <div className='login_area'>
        <div className="login_box">
            <h2>Login</h2>
            <form className='login_form' action="">
                <input type="text" placeholder='👨‍💻 Username' />
                <input type="password" placeholder='🔐 Password' />
                <button>Login</button>
            </form>
        <button onClick={()=>signIn()}>sign in</button>
        </div>

    </div>
  )
}

export default Login;