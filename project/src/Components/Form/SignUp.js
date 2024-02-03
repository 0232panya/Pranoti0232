
import React from 'react'
import "./SignUp.css";


const SignUp = () => {
  return (
    <div className='SignUp-form'>
      <div className='signup-left'>
          <div className='signup-form-logo'>
            <img src='https://interiors.co.za/wp-content/uploads/2020/05/Interiors-logo-mobile-retina.png' alt=""/>
          </div>
          <div className='signup-form-info'>

              <div className='signup-forminfo-cat'>
                <div className='logo-img'>
                  <img src='https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/accounts-ui/wishlist.svg' alt='' />
                </div>
                <div className='logo-info'>
                  <p className='logo-info-title'>Create a wishlist</p>
                  <p>Beautiful home interiors to seek inspiration from</p>
                </div>
              </div>

              <div className='signup-forminfo-cat'>
                <div className='logo-img'>
                  <img src='https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/accounts-ui/catalog.svg' alt='' />
                </div>
                <div className='logo-info'>
                  <p className='logo-info-title'>Browse catalogue</p>
                  <p>Widest range of furniture, decor and modular products</p>
                </div>
              </div>

              <div className='signup-forminfo-cat'>
                <div className='logo-img'>
                  <img src='https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/accounts-ui/quote_v2.svg' alt='' />
                </div>
                <div className='logo-info'>
                  <p className='logo-info-title'>Get free quote</p>
                  <p>Review quotes for your home interiors</p>
                </div>
              </div>
          </div>
      </div>
      <div className='signup-right'>
        <div className='signup-right-top'>
          <div className='signup-right-title'>
              <p>Sign In / Sign Up</p>
          </div>
          <form>
            <input type='text' placeholder='Enter Email / Mobile Number' />             
            <button className='signup-forminfo-btn'>Continue</button>
          </form>
        </div>

        <div className='signup-right-middle'>
          <div className='middle-one'><hr/></div>
          <div className='middle-second'>OR</div>
          <div className='middle-third'><hr/></div>
        </div>

        <div className='signup-right-bottom'>
          <button>
            <img src='https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/img/accounts/google-logo-1655971016-XOZJb.svg' alt='' />
          </button>
          <div>
          By signing up or signing in, you agree to the privacy<br /> policy & terms and conditions
          </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp
