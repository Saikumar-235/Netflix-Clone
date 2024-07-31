import React, { useState } from 'react'
import Home from './Home'
import { NavLink } from 'react-router-dom'

const Signin = () => {


  let [signin,setsignin]=useState({
     email:"",
     password:"",
     
  })
  let {email,password} = signin
  let handleinput=(e)=>
  {
    let {name,value}=e.target
    setsignin({...signin,[name]:value})

  }
  let [error,setError]=useState({})
  let handlesubmit=(e)=>
  {
    e.preventDefault()
    let ValidationErrors={}
    if(email==""){
      ValidationErrors.email=" Please enter a valid email address or phone number."
}
else if(!/\S+@\S+\.\S+/.test(email)){
  ValidationErrors.email="THis should be a valid email address"
}  
if(password==""){
  ValidationErrors.password="Your password must contain between 4 and 60 characters."
}

setError(ValidationErrors)
  }
  return (
    <><aside className='netflix'><div className="netflixIcon">
    <a href="#">
        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240313101431/Netflix-Logo.png"
            className="img-netflixIcon" />
    </a>
</div></aside> 

<form onClick={handlesubmit}>
  
  <section className='signpage'>
  <h2>Sign In</h2><div className="userInput">
                    <input type="text" name="email" value={email}
                           placeholder="Email or phone number"
                           onChange={handleinput}
                            />
                             <div className='form-error text-red-600 text-sm'>
            {error.email && <span>{error.email}</span>}
         </div> 
                </div>
               
                <div className="userInput">
                    <input type="password"
                           name="password" 
                           value={password}
                           onChange={handleinput}
                           placeholder="Password" 
                          />
                              <div className='form-error text-red-600 text-sm'>
            {error.password && <span>{error.password}</span>}
         </div> 
                </div>
           
               
                <div>
                    <button className="btn-login">Sign In</button>

                </div>
                <div className='OR'><p>OR</p></div>
                <div><NavLink className='forgotpass' to="">Forgot password? </NavLink></div>
                <div className="remMe">
                    <div>
                        <input type="checkbox"/>
                        <label className="cText">Remember me</label>
                    </div>
                </div>
                <div className="signUp">
                    New to Netflix? <a href="#" 
                                       className="sLink">Sign up now</a>.
                </div>
                <div className="google cLink ">
                    This page is protected by Google
                  reCAPTCHA to ensure you're not a bot.
                  <a href="#">Learn more.</a>
                </div>   
  
                </section> </form> </>
  )
}

export default Signin