
import React from 'react'
import './Form';

const LogIn = () => {

  

  return (
    <>
    <div className='form-Page' ></div>
        <div className='login-Form'>
          <p className='login-p'>Log In</p>
            <form className='login-form-page'>
            <input type='text' className='input-Teext' placeholder='Enter Your Name' />
            <input type='text' className='input-Teext'  placeholder='Enter Your Email' />
            <input type='text' className='input-Teext'  placeholder='Enter Your Number' />
            <input type='text' className='input-Teext'  placeholder='Your Current Residents Pincode' />

            <button >GET FREE CONSULTATION</button>
            </form>
            <p className='login-TnC'>By submitting this form, you agree to the privacy policy & terms and conditions</p>
        </div>
    
    </>
  )
}

export default LogIn
