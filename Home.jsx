import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  let [form,setform]=useState({
    email:"",
  })
  let {email}=form
  let handleinput=(e)=>
  {
   let {name,value}=e.target
   setform({...form,[name]:value})
  }
  let [errors,seterrors]=useState({})
  let handlesubmit=(e)=>{
    e.preventDefault()
    let ValidationErrors={}
    if(email==""){
      ValidationErrors.email="Please enter a valid email"
}
else if(!/\S+@\S+\.\S+/.test(email)){
  ValidationErrors.email="THis should be a valid email address"
}
seterrors(ValidationErrors)
  }
  return (
    <><main onClick={handlesubmit} >
    <nav>
     <aside className='netflix'><div className="netflixIcon">
            <a href="#">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240313101431/Netflix-Logo.png"
                    className="img-netflixIcon" />
            </a>
        </div></aside> 
       
     <aside>
      <NavLink to="/signin" className="signin" >Sign In</NavLink></aside> 
   </nav>

   <section>
    <div className='heading'><h1>Unlimited movies, TV shows and more</h1></div>
    <div className='watchany'><p>Watch anywhere. Cancel anytime.</p> <br /> 

 <p className='readyto'>Ready to watch? Enter your email to create or restart your membership.</p></div>
   </section>
   <section>
    <input type="email"  name='email' value={email} onChange={handleinput} className='startinp text-red-700'  placeholder='Email Address'/><button className='getstar'>GET STARTED </button>
    <div className='form-errors text-red-600 text-sm'>
            {errors.email && <span>{errors.email}</span>}
         </div></section>
   </main> </>
  )
}

export default Home