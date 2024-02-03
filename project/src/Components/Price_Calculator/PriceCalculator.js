
import React from 'react';
import './Price_Calculator.css';

const PriceCalculator = () => {
  return (
    <div>
        
        <div className='calculation-Cards row'>

          <div className='cal-Card col-3'>
            <div className='iCon'> 
              <div className='cal-Icon1'>
                <div>
                  <img src='https://cdn-icons-png.flaticon.com/512/2607/2607259.png' alt="" />
                </div>
              </div>
              <div className='cal-Icon2'>
                <div>
                  <img src='https://pic.onlinewebfonts.com/thumbnails/icons_453425.svg' alt="" />
                </div>
              </div>
            </div>
            <div className='cal-Name'>
              <p className='cal-p'>Full Home Interior</p>
              <p className='cal_Ptag'>Know the estimate price for your full home interior.</p>
            </div>
            <div className='cal-btn'>
              <button><p>CALCULATE</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
              </button>
            </div>
          </div>

          <div className='cal-Card col-3'>
            <div className='iCon'>
              <div className='cal-Icon1'>
                <div>
                  <img src='https://static.thenounproject.com/png/1539815-200.png'  alt=""/>
                </div>
              </div>
              <div className='cal-Icon2'>
                <div>
                  <img src='https://pic.onlinewebfonts.com/thumbnails/icons_453425.svg' alt="" />
                </div>
              </div>
            </div>
            <div className='cal-Name'>
              <p className='cal-p'>Kitchen</p>
              <p className='cal_Ptag'>Get an approximate costing for your kitchen interior.</p>
            </div>
            <div className='cal-btn'>
              <button><p>CALCULATE</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
              </button>
            </div>
          </div>
          
          <div className='cal-Card col-3'>
            <div className='iCon'>
              <div className='cal-Icon1'>
                <div>
                  <img src='https://static.thenounproject.com/png/1106414-200.png' alt="" />
                </div>
              </div>
              <div className='cal-Icon2'>
                <div>
                  <img src='https://pic.onlinewebfonts.com/thumbnails/icons_453425.svg' alt="" />
                </div>
              </div>
            </div> 
            <div className='cal-Name'>
              <p className='cal-p'>Wardrobe</p>
              <p className='cal_Ptag'>Our rough math for your wardrobe.</p>
            </div> 
            <div className='cal-btn'>
              <button><p>CALCULATE</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
              </button>
            </div>
          </div>

        </div>
    </div>
  )
}

export default PriceCalculator;
