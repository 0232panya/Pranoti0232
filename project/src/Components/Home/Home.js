
import './Home.css'
//import { useState } from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Link , Outlet } from 'react-router-dom'

//import Header from '../Header/Header'
//import Footer from '../Footer/Footer';


function Home({image, showModal,setShowModal}){

  // const [visible,setVisible] = useState(4);

    // function showMoreItem(){
    //   setVisible((prevValue) => prevValue + 4);
    // }


    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };


    return(
        <div className='home'>
          
          {/* -------------------TOP BANNER------------------- */}

          <Banner  showModal={showModal} setShowModal={setShowModal}  />


        {/* ------------------- Interior Design Consult Cards ---------------------- */}
        {/* <div className='type-int-Card'>
            <div className='type-int-Head'>
                <p className='type-head'>One-stop shop for all things interiors</p>
                <p className='type-p'>Be it end-to-end interiors, renovation or modular solutions, we have it all for your home <br/> or office. 
                  With a wide range of furniture & decor, we have your back from start to finish.</p>
            </div> 
            <div className='type-Main-Container'> 

                <div className='type-Container'>
                  <div>
                    <img src='https://mir-s3-cdn-cf.behance.net/projects/404/2d422798596339.Y3JvcCwyMzk3LDE4NzUsNTMsMA.jpg' alt='' />
                  </div>
                  <div>
                    <p>Full Home Interiors</p>
                    <p></p>
                  </div>
                </div>

                <div className='type-Container'>
                  <div>
                    <img src='https://decoruss.com/wp-content/uploads/2020/11/rsz_sli-2_1.jpg' alt='' />
                  </div>
                  <div>
                    <p>Renovation</p>
                  </div>
                </div>

                <div className='type-Container'>
                  <div>
                    <img src='https://www.officelovin.com/wp-content/uploads/2020/01/university-of-surrey-office-1-810x600.jpg' alt='' />
                  </div>
                  <div>
                    <p>Commercial Interiors</p>
                  </div>
                </div>

                <div className='type-Container'>
                  <div>  
                    <img src='https://roomdsign.com/wp-content/uploads/2022/08/light-gray-curtains-with-white-couch-768x614.jpg' alt='' />
                  </div>
                  <div>
                    <p>furniture & Decor</p>
                  </div>
                </div>
                
            </div>         
        </div> */}


        {/* -------------------BROWSER DESIGN IDEA -------------------- */}
        <div className='Catagory'>
            <p className='cat-Head-p'>Design Ideas for Every Space</p>
            <p className='cat-p'>Because every corner holds a unique design potential.</p>

          {/* ----------------- Cards --------------------------- */}
         <div className='cards-row'>  
         <Carousel responsive={responsive}  removeArrowOnDeviceType={["tablet", "mobile"]}>   
          {/* <div className='row'> */}
            {
              image.map((img,key)=>(
                <div className='col-3' key={key}>
                  <Link to={`/${img.cardName}`} className='card-link'>
                    <Card  item={img} />
                  </Link>
                </div>
              ))
            }
          {/* </div> */}
          </Carousel>
          <Outlet />
          </div>      
        </div>
          

        {/* ---------------- ESTIMATE CALCULATION OF DECORATION ---------------------- */}
        <div>
        <div className='cal-Head'>
        <div className="rotating-Words">
            <p>Get the estimate for your</p>            
          <div className='second-sent'>
            <span className='span'>Full Home</span>
            <span className='span'>Kitchen</span>
            <span className='span'>Wardrobe</span>
            <span className='span'>BedRoom</span>
          </div>
        </div>
            <p className='cal-p'>Calculate the approximate cost of doing up your home interiors</p>
        </div>
        
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
              <p>Know the estimate price for your full home interior.</p>
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
              <p>Get an approximate costing for your kitchen interior.</p>
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
              <p>Our rough math for your wardrobe.</p>
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

                {/* ------------------- WHY CHOOSE US INFINITY CAROUSEL------------------------- */}

                <div className='infinity-slide-box'>
          <div className='infinity-slide-title'>
              Why Choose Us
          </div>
          <div className='wrap-slide'>
          <div className='infinity-slide-cards'>
              <div className='infinity-cards'>
                  <img src="https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/3500-designers-1682070430-eEvZq.jpg" alt='' /> 
                  <p>300+ Designers</p>
              </div>
              <div className='infinity-cards'>
                  <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/flat-10-year-warranty-1-1682067957-aj1Rq.jpg' alt="" />
                  <p>Flat 10-year <br/> Warranty</p>
               </div>
              <div className='infinity-cards'>
                  <img src="https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/easy-emis-1682070436-evtag.jpg" alt="" />
                  <p>Easy EMIs</p>
              </div>
              <div className='infinity-cards'>
                  <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/45-day-move-in-guarantee-1682070434-vYtgS.jpg' alt='' />
                  <p>45-days move-in <br/> guarantee</p>
              </div>
              <div className='infinity-cards'>
                  <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/146-quality-checks-1682070435-krIlQ.jpg' alt='' />
                  <p>146 quality checks</p>
              </div>
              <div className='infinity-cards'>
                <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/50000-happy-homes-1682070435-ih1Ir.jpg' alt='' />
                <p>10,000+ happy <br/> homes</p>
              </div>
              <div className='infinity-cards'>
                <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/20-lakhcatalogue-products-1682070432-CoDEa.jpg' alt='' />
                <p>10 lakh+ Catalogue <br/> products</p>
              </div>
          </div>
          <div className='infinity-slide-cards'>
              <div className='infinity-cards'>
                  <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/3500-designers-1682070430-eEvZq.jpg' alt='' />
                  <p>300+ Designers</p>
              </div>
              <div className='infinity-cards'>
                  <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/flat-10-year-warranty-1-1682067957-aj1Rq.jpg' alt='' />
                  <p>Flat 10-year <br/> Warranty</p>
              </div>
              <div className='infinity-cards'>
                  <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/easy-emis-1682070436-evtag.jpg' alt='' />
                  <p>Easy EMIs</p>
              </div>
              <div className='infinity-cards'>
                 <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/45-day-move-in-guarantee-1682070434-vYtgS.jpg' alt='' />
                 <p>45-days move-in <br/> guarantee</p>
              </div>
              <div className='infinity-cards'>
                  <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/146-quality-checks-1682070435-krIlQ.jpg' alt='' />
                  <p>146 quality checks</p>
              </div>
              <div className='infinity-cards'>
                  <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/50000-happy-homes-1682070435-ih1Ir.jpg' alt='' />
                  <p>10,000+ happy <br/> homes</p>
              </div>
              <div className='infinity-cards'>
                  <img src='https://images.livspace-cdn.com/w:80/h:80/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/20-lakhcatalogue-products-1682070432-CoDEa.jpg' alt='' />
                  <p>10 lakh+ Catalogue <br/> products</p>
              </div>
          </div>
          </div>
        </div>

        {/* ----------------------- COLLAGE BANNER ----------------------------- */}
        <div className='collage-banner' >
          <div>

          </div>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://images.livspace-cdn.com/w:700/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/living-room-d-1689150613-oIGOU.jpg"  alt="..." />
                <img src="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/master-bedroom-d-1689150615-GAvUx.jpg" alt="..." />
                <img src="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/false-ceiling-designs-web-1694434017-5JzRp.jpg" alt="..." />
                <img src="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/homes-by-livspace-web-1694434020-x7mxm.jpg" alt='' />
                <img src='https://images.livspace-cdn.com/w:700/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/kitchen-d-1689150612-ouirR.jpg' alt='' />
                <img src='https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/wardrobe-d-1689150619-VfOcJ.jpg' alt='' />
              </div>
              <div class="carousel-item">
              <img src="https://images.livspace-cdn.com/w:700/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/kids-bedroom-d-1689150610-UnlVi.jpg" alt="..." />
                <img src="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/home-office-d-1689150608-RHLV9.jpg" alt="..." />
                <img src="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/guest-bedroom-d-1689150606-C0wy5.jpg" alt="..." />
                <img src="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/foyer-d-1689150511-1Prr3.jpg" alt='' />
                <img src='https://images.livspace-cdn.com/w:700/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/dining-room-d-1689150498-HC3VH.jpg' alt='' />
                <img src='https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/bathroom-d-1669044076-ZlOfj.jpg' alt='' />
              </div>
              
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
          </div>


          {/* ----------------- FREQUENTLY ASKED QUESTIONS -------------- */}

            <div className='asked-que'>
              <div className='asked-que-title'>
                Frequently Asked Questions
              </div>
              <div class="accordion" id="accordionExample">
                 <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What Is Home Interior Design?
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                      Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment 
                      for the people using the space. It involves selecting colours, furniture, and other decorative elements to create a cohesive and visually 
                      appealing look that is influenced by personal style, the size and layout of the space, and the desired level of comfort and functionality. 
                      Home interior design also involves creating functional areas for different activities, such as cooking, eating, sleeping, and entertaining, 
                      and may include the use of home interior colour to add visual interest and depth to the space. Some people choose to work with a professional 
                      interior designer to help them create the perfect home interior design, while others prefer to handle the process themselves.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Why Is an Interior Important?
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                      Interior designers are trained professionals who can help you create functional and aesthetically pleasing spaces in your home. 
                      They have the expertise and experience to assist with home interior design, including choosing the best colours and decor,
                       and can save  you time and effort by handling the entire design process from start to finish. Interior designers can also help with budget 
                       management by suggesting cost-effective solutions and prioritizing spending. They have the skills to overcome design challenges and pay 
                       attention to every detail to ensure that the final result is cohesive and visually appealing. Whether you are looking for a simple design 
                       for a small home or a more elaborate home interior decoration, an interior designer can help bring your vision to life and create a space that 
                       reflects your personal style and meets your needs.
                      </div>
                    </div>
                 </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What Are the Most Important Factores to Keep In Mind While Designing a Room?
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                      When designing a home, there are several important factors to consider, including functionality, layout, 
                      size and scale, light, home interior colour, texture, and personal style. These elements can help you create a space that is functional, 
                      aesthetically pleasing, and reflects your personal tastes.
                      <br/>
                      To ensure that your room is functional and meets the needs of those using it, consider the primary purpose of the space. 
                      For example, a kitchen should be designed with cooking in mind, while a bedroom should be a peaceful and restful space. 
                      The layout of the room should also be functional and flow well, taking into account the placement of furniture and traffic patterns
                       within the space.
                      </div>
                    </div>
                  </div>
                  
                </div>
            </div>

    </div>

    );
}

export default Home;