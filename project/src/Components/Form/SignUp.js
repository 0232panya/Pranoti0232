
import React from 'react'
import "./SignUp.css";


const SignUp = () => {
  return (
    <div className='signUp-Form'>
      <div className='signupForm'>

        {/* ---------------- LOGIN FORM ------------------ */}
       <div className='login-formPage'>
          <p className='login-formPage-p'>Login Form</p>
          <form className='form-LoginPage'>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Number' />
                <div className='inputForm-div'><p style={{fontSize:"14px", display:"inline-flex"}}>Send Me updates on WhatsApp </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
                      <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
                    </svg>
                </div>
               
              <input type='email' placeholder='Email' />
              <input type='text' placeholder='Current Residance Pincode' />

              <button type='submit' className='form-LoginPage-btn'>GET FREE QUOTE</button>
          </form>
       </div>

       {/* ------------ MIDDLE LINE OF FORM ----------------*/}

       <div className='form-middle'>
          <div className='middle-line-text'>OR</div>
       </div>

       {/* -------------------- SIGNUP FORM ------------------- */}
       <div className='signUp-formPage'>
          <p className='signUp-FormPage-p'>Sign Up</p>
          <form className='signUpFormPage'>
             <input type='text' placeholder='Email Or Phone Number' />
             {/* <input type='text' placeholder='Enter OTP' /> */}

             <button type='submit' className='form-LoginPage-btn'>LOGIN</button>
          </form>
       </div>
       </div>
    </div>
  )
}

export default SignUp
