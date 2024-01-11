import React, { useState } from 'react'
import './ProfessionalPage.css';
import StoreAddress from './storeAddress';

const ProfessionalPage = () => {

  const [img, setImg] = useState(StoreAddress);


  const handleClick = (valItem) =>{
    const updateCity = StoreAddress.filter((val)=>(
        val.City === valItem
        
    ));
    setImg(updateCity);
  }

  return (
    <div className='professinal-page'>
      <div className='top-banner'>
        <div className='banner-text'>
                <p className='bold-text'>Find a Professional near your City.</p>
        </div>
      </div>
      <div className='bottom-section'>
        <div className='left-section'>
            <button onClick={() => handleClick('Pune')}>Pune</button>
            <button onClick={() => handleClick('Mumbai')}>Mumbai</button>
            <button onClick={() => handleClick('Bengaluru')}>Bengaluru</button>
            <button onClick={() => handleClick('Chennai')}>Chennai</button>
            <button onClick={() => handleClick('Surat')}>Surat</button>
            <button onClick={() => handleClick('Delhi')}>Delhi</button>
            <button onClick={() => setImg(StoreAddress)}>All</button>
        </div>
        <div className='right-section'>
              {
                img.map((img,key) =>{
                  return(
                    <div>
                  <div className='professional-card' key={key}>
                <div className='left-card'>
                    <img src={img.img} alt="" />
                </div>
                <div className='right-card'>
                    <div className='right-info-card'>
                      
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>
                      
                      <p>{img.Address}</p>
                    </div>
                    <div className='right-button-card'>
                        <button>Contact us</button>
                    </div>
                </div>
                </div>
                <hr/>
              </div>
              
                )})
              }
        </div>
      </div>
    </div>
  )
}

export default ProfessionalPage;
