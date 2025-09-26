import React, { useState } from 'react'
import './LoginSignup.css'

import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import person_icon from '../../assets/person.png'

function LoginSignup() {

 const [action , setAction] = useState("false")


  return (
    <div className="container">
      <div className="header">
        <h1>{action}</h1>
      </div>

      {/* input field code checkout here  */}
      {action === "Login"?<div></div>:<div className="input">
        <img src={person_icon} alt="User" />    
        <input type="text" placeholder="Enter your name" />
      </div> }

      <div className="input">
        <img src={email_icon} alt="Email" />
        <input type="email" placeholder="Enter your email" />
      </div>

      <div className="input">
        <img src={password_icon} alt="Password" />
        <input type="password" placeholder="Enter your password" />
      </div>

         {action === 'Signup'?<h3>Already Have a Account ? <span>SignIn !</span></h3>:<h3>Create a new Account ? <span>SignUp !</span></h3>}

      <div className="submit-container">

        <button className={action === 'Login'?"Logingrey": "Login"} onClick={()=>{setAction("Login")}}>Login</button>


        <button className={action ==='Signup'?"signupgrey":"signup"} 
        onClick={()=>{setAction("Signup")}}>Signup</button>
      </div>
    </div>

  
           
  )
}

export default LoginSignup
