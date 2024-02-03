
import React from 'react'
import './ImagePopUp.css';
import LogInPopUp from '../Login_PopUp/LogInPopUp';

const ImagePopUp = ({visibleModal, setVisibleModal}) => {
  return (
    <div className='imagePage'>
        <div className='imagePage_img'>
            <img src='https://cdn11.bigcommerce.com/s-hka5gs968s/content/5.jpg' alt='' style={{width: '100%', height: '450px'}}/>
        </div>
        <div className='image_Btn_Title'>
            <div className='image_content'>
                <p className='image_content_P'>Your dream home is just a click away</p>
                <button className='image_Content_Button' onClick={ () => setVisibleModal(true)}>GET STARTED</button>

                {visibleModal && <LogInPopUp />}

            </div>
        </div>
    </div>
  )
}

export default ImagePopUp;
