
import React from 'react'
import './StoreLocation.css';
import { Link } from "react-router-dom"


const StoreLocation = () => {
  return (
    <div className='store_Location'>
      <div className='store_Location_box'>
        <div className='store_Location_Img_Box'>
            <img src='https://www.livspace.com/_nuxt/img/Location-ec.fb1266e.png' alt='' className='store_Location_smallImg' />
            <img src='https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/banner-1668702771-tryh1/ec-desk-1692455434-bnM9X.jpg' alt="" className='store_Location_BackImg' />
        </div>
        <div className='store_Location_info_Box'>
            <div>
                <p className='store_Location_Info_Title'>Looking for inspiration?</p>
                <p className='store_Location_Info_SubTitle'>Visit a Interior Design Experience Centre.</p>
                <Link to={"/interior_design_near_me"} className='Store_Location_link'><p className='store_Location_Info_Link'>Find one Close to you <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg></p>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StoreLocation;
