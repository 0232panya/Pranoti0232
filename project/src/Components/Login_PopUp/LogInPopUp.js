
import React, { useState } from 'react';
import './LogInPopUp.css';

const LogInPopUp = ({visibleModal, setVisibleModal}) => {

    // for Toggle Button
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    //for Form Validation 
    let initValue = {name : "", email: "", phone: "", pincode: ""};
    const [validation, setValidation] = useState(initValue);

    const handleValue = (e) => {
      e.preventDefault();
      setValidation(e.target.value);

    }

    const handleFormSubmit = (e) => {
      e.preventDefault();

      if(validation.name == "" ){
        alert("plase write form")
      }
    }

  return (
    <>
    <div className='Login_popUp'>
      <div className='Login_Pop_Box'>
        <div className='Login_popUp_closeBtn'>
            <button onClick={() => setVisibleModal(false)}>x</button>
        </div>
        <div className='login_PopUp_Header'>
        </div>
        <div className='login_PopUp_Form'>
            <form onSubmit={handleFormSubmit}>
                <input type='text' placeholder='Enter Your Name' value={validation.name} onChange={handleValue} />
                <input type='email' placeholder='Enter Email' value={validation.email} onChange={handleValue} />
                <input type='text' placeholder='Enter Phone' value={validation.phone} onChange={handleValue} />
                <div class="form-check form-switch">
                    <label 
                        class="form-check-label" 
                        for="flexSwitchCheckChecked">
                       Send me updates on WhatsApp
                    </label>
                    
                    <input
                     class="form-check-input" 
                     type="checkbox" 
                     role="switch" 
                     id="flexSwitchCheckChecked" 
                     onClick={handleChange} 
                     checked={checked} 
                     style={{display:"flex", 
                        justifyContent: "right", 
                        width: '6%',
                        width: "40px",
                        height: "20px",
                        outline:"0", 
                        margin: "auto" }}/>  
                </div>
                <input type='text' placeholder='Enter PinCode' value={validation.pincode} onChange={handleValue} />
                <button className='popUp_Form_Btn'>GET FREE ESTIMATE</button>
                <div className='popUp_Form_TC'>By submitting this form, you agree to the <a href='/#'> privacy policy </a>  & <a href='/#'> terms and conditions </a></div>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default LogInPopUp;
