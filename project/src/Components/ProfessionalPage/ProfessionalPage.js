import React, { useState } from 'react'
import './ProfessionalPage.css';
import StoreAddress from './storeAddress';
import Carousal from '../Carousal/Carousal';
import PriceCalculator from '../Price_Calculator/PriceCalculator';
import ImagePopUp from '../SmallImage/ImagePopUp';

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
                <img src='https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/banner-1668702771-tryh1/banner-desktop-1668702806-WvsXm.jpg' alt="" />
                <div className='professional_banner_Text'>
                  <div className='professional_banner_Content'>
                    <p className='consultation_Title'>Find the best interior designers</p>
                    <p className='consultation_p'>at a Interior Design Experience Centre near you</p>
                    <button className='professional_banner_Button'>BOOK FREE CONSULTATION</button>
                  </div>
                </div>
        </div>
      </div>

      {/* -------------- MIDDLE SECTION ------------------- */}

      <div className='SearchViaCity'>
        <div className='searchViaCity_'>
          <div className='searchViaCity_Title'>
            <p className='SearchViaCity_Title_Header'>Find us here</p>
            <p>Locate us in your city and drop in! We'd love to meet you.</p>
          </div>
          <div className='searchViaCity_Button'>
            <button className='searchViaCity_Btn'>Contact Us</button>
          </div>
        </div>
        <div className='searchViaCity_dropdown'>
          <div class="dropdown">
            <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <p>Select Location</p><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
            <ul class="dropdown-menu" style={{width: "220px",margin: "0"}}>
                <li><button onClick={() => setImg(StoreAddress)} style={{border: "none", background: "transparent", margin: "0",padding: "5px",width: "100%",display:'flex', justifyContent: "start"}}>See all Address</button></li> 
                <li><button onClick={() => handleClick('Pune')} style={{border: "none", background: "transparent", margin: "0",padding: "5px",width: "100%",display:'flex', justifyContent: "start"}}>Pune</button></li>
                <li><button onClick={() => handleClick('Mumbai')} style={{border: "none", background: "transparent", margin: "0",padding: "5px",width: "100%",display:'flex', justifyContent: "start"}}>Mumbai</button></li>
                <li><button onClick={() => handleClick('Bengaluru')} style={{border: "none", background: "transparent", margin: "0",padding: "5px",width: "100%",display:'flex', justifyContent: "start"}}>Bengaluru</button></li>
                <li><button onClick={() => handleClick('Chennai')} style={{border: "none", background: "transparent", margin: "0",padding: "5px",width: "100%",display:'flex', justifyContent: "start"}}>Chennai</button></li>
                <li><button onClick={() => handleClick('Delhi')} style={{border: "none", background: "transparent", margin: "0",padding: "5px",width: "100%",display:'flex', justifyContent: "start"}}>Delhi</button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------- STORE LOCATION --------------- */}
      <div className='bottom-section'>
        <div className='left-section'>

            <div className='map_Location'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773484.55170563!2d61.0245165611659!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1705684371855!5m2!1sen!2sin" title='Google Map' width="670" height="600" style={{border:"0", outline: "0", borderRadius: "18px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className='right-section'>
              {
                img.map((img,key) =>{
                  return(
                    <div className='rightSide_Card'>
                  <div className='professional-card' key={key}>
                <div className='left-card'>
                    <img src={img.img} alt="" />
                </div>
                <div className='right-card'>
                    <div className='right-info-card'>                      
                      <p>{img.Address}</p>
                    </div>
                    <div className='right-button-card'>
                        <button className='contactUs_BTN'>Contact us</button>
                        <button className='whatsapp_svg_BTN'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                            </svg></button>
                        <button className='phone_svg_BTN'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg></button>
                    </div>
                </div>
                </div>
                <hr/>
              </div>
              
                )})
              }
            </div>
          </div>

          {/* ------------------------ Experience Centre cards --------------------- */}
        <div className='StoreLocation_cards'>
            <div className='StoreLocation_cards_Title'>
               <p className='Cards_Header'>What can I expect at the Experience Centres?</p>
               <p className='cards_P'>Experience endless options for everything interiors</p>
            </div>

            <div className='StoreInfoCards'>
                <div className='store_card'>
                    <img src='https://media.inspiringvillas.com/prd/upload/property/cliff-top-residence-ao-yon-bay-phuket1568525452892.jpeg' alt='' />
                    <div className='storeCard_Info'>
                        <p className='storeCard_Info_Header'>Get a feel of our product</p>
                        <p>At Interior Design, seeing is believing. So is holding, touching and feeling. Discover handpicked that will transform the way you live.</p>
                    </div>
                </div>
            </div>

            <div className='StoreInfoCards'>
                <div className='store_card'>
                    <img src='https://everhartadvisors.com/wp-content/uploads/2023/10/Girl-Going-Through-Paperwork.jpg' alt='' />
                    <div className='storeCard_Info'>
                        <p className='storeCard_Info_Header'>Stunning style for every room</p>
                        <p>Take a walkthrough of beautifully designed bedrroms, living rooms, modular kitchens and everything in between.</p>
                    </div>
                </div>
            </div>

            <div className='StoreInfoCards'>
                <div className='store_card'>
                    <img src='https://images.livspace-cdn.com/w:600/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/livspace-ec-1668702976-fEdYl/desktop-1668702982-qlSbB/material-desktop-1668703000-1GnA3.jpg' alt='' />
                    <div className='storeCard_Info'>
                        <p className='storeCard_Info_Header'>Material and finish options</p>
                        <p>Be spoiled for choice! Pick from a wide range of material finishes, wallpapers, upholstery and more.</p>
                    </div>
                </div>
            </div>

            <div className='StoreInfoCards'>
                <div className='store_card'>
                    <img src='https://blog.marvik.ai/wp-content/uploads/2022/07/MARVIK_0154-3.jpg' alt='' />
                    <div className='storeCard_Info'>
                        <p className='storeCard_Info_Header'>expert design consultion</p>
                        <p>There's always an interior designer near you to listen, create and curate your home as per yout taste and budget.</p>
                    </div>
                </div>
            </div>

        </div>
              
              {/* ------------------------------------- */}
        <div className='carousal3d'>
          <div className='carousal3d_Title'>
            <p>A sneak-peek into our Experience Centres</p>
          </div>
            <Carousal />
        </div>


          {/* -------------- Price Calculator ------------- */}
          <div className='PriceCalculator'>
            <div className='priceCalculator_Title'>
              <p className='priceCalculator_Header'>Interior Design Price Estimator</p>
              <p className='priceCalculator_PTag'>Calculate the approximate cost of doing up your home interiors.</p>
            </div>
            <PriceCalculator />
          </div>

          {/* -------------- Footer Image Pop up Section ----------------- */}
          <div>
            <ImagePopUp />
          </div>
          
    </div>
  )
}

export default ProfessionalPage;
