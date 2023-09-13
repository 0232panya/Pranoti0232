
import './Home.css'
//import Header from '../Header/Header';
import Cards from '../Cards/Cards.js';
// import Header from '../Header/Header';


function Home(){
    
    
    // let box = document.querySelector('.product-slider');

    // function prePress(){
    //     let width = box.clientWidth;
    //     box.scrollLeft = box.scrollLeft - width;
    //     // console.log(width);
    // }

    // function nextPress(){
    //     let width = box.clientWidth;
    //     box.scrollLeft = box.scrollLeft + width;
    //     // console.log(width);
    // }

    return(
        <div className='home'>
          {/* <Header/> */}
          {/* ------------TOP BANNER--------------- */}
        <div className='banner'>
            <div className='slider'>
                <img src='https://www.decorilla.com/online-decorating/wp-content/uploads/2016/07/find-an-interior-designer.jpg' alt="" id='slideTag'/>
            </div> 
            <div className='overlay'>
                <div className='content'>
                    <h2>Best Design</h2>
                    <p>Check out Interior Design’s new Best in Design book, featuring unique design stories and projects from some of the most influential design-thinkers.</p>
                    <div>
                        <button type='button'>Learn More</button>
                        <button type='button' className='btn2'>Sign Up</button>
                    </div>
                </div>
            </div>     
        </div>

        <div>
          
        </div>

        {/* -------------------BROWSER IDEA -------------------- */}
        <div className='Catagory'>
            <h1>Browse Idea By Room</h1>
            <div className='slider-cat'>
                {/* <div className='img-slider'> */}
                    {/* <img src='https://2.bp.blogspot.com/-eB5L5afz0-4/UL-PRtLSyFI/AAAAAAAAa3o/8wqRtTgKH7k/s1600/Modern+interior+decoration+living+rooms+ceiling+designs+ideas.+(2).jpg' />
                    <p>Living Room</p> */}
                    {/* <button className='btn-pre' onClick={prePress}><p>&lt;</p></button>
                    <button className='btn-next' onClick={nextPress}><p>&gt;</p></button>

                    <div className='product-slider'>
                        <Cards cardNo={<img src="https://static.zingyhomes.com/projectImages/user_4876/_MG_5478.JPG" alt="" />} cardName="Kitchen" />
                        <Cards cardNo={<img src="https://interiorstylehunter.com/wp-content/uploads/2016/09/Mel-Yates_Shalini-Misra_NW6_A_033-Re.jpg" alt=""/>} cardName="Living Room"/>
                        <Cards cardNo={<img src="https://www.magnonindia.com/wp-content/uploads/2018/06/kidsbedroom_V1.jpg" alt=""/>} cardName="Bedroom"/>
                        <Cards cardNo={<img src="https://www.decorandstyle.co.uk/wp-content/uploads/2016/03/capa-C%C3%B3pia9.jpg" alt=""/>} cardName="Dinning Hall"/>
                        <Cards cardNo={<img src="https://i.pinimg.com/originals/5e/ce/22/5ece22573972b24b4da3669c8c430219.jpg" alt=""/>} cardName="Stairs"/>
                        <Cards cardNo={<img src="https://s3-ap-south-1.amazonaws.com/designcafe-dev/wp-content/uploads/2019/11/17055926/multi-hued-stylish-lighting-for-balcony-design-1024x1024.jpg" alt=""/>} cardName="Balcony"/>
                        <Cards cardNo={<img src="https://i1.wp.com/magzhouse.com/wp-content/uploads/2019/11/Nice-Rooftop-Terrace-Design-Ideas-15.jpg?ssl=1" alt=""/>} cardName="Terrece"/>
                        <Cards cardNo={<img src="https://i.pinimg.com/originals/92/ae/28/92ae28d2f2794677824d01b74c3ae383.jpg" alt=""/>} cardName="Garden"/>
                        <Cards cardNo={<img src="https://www.contemporist.com/wp-content/uploads/2020/09/modern-grey-bathroom-grey-bathtub-wood-vanity-220920-1048-01.jpg" alt=""/>} cardName="Bathroom"/>
                        <Cards cardNo={<img src="https://th.bing.com/th/id/R.b5a312c85a035d23bc5fb2f2203b5b8b?rik=FCWibSn2wIPZwA&riu=http%3a%2f%2fwww.home-designing.com%2fwp-content%2fuploads%2f2009%2f03%2fkids-room-design3.jpg&ehk=75FugFZQTBcpEaBGEi%2bD4E8%2bZyE5UEQteZ8o3OyZ1mc%3d&risl=&pid=ImgRaw&r=0" alt=""/>} cardName="Kids Bedroom"/>
                        <Cards cardNo={<img src="https://i.pinimg.com/originals/ca/9e/00/ca9e00e445a24d08d4b8fd18d0e68573.jpg"  alt=""/>} cardName="Wordrobe"/>
                        <Cards cardNo={<img src="https://www.greshamroofing.com/wp-content/uploads/2020/07/file.jpg" alt="" />} cardName="Out Door"/>
                        <Cards cardNo={<img src="https://th.bing.com/th/id/OIP.rG7i5FEJd3PCPNMxAm788AAAAA?pid=ImgDet&rs=1" alt=""/> } cardName="Gym Room"/>
                    </div>
                </div> */}
         <div class="container img-slider">
            <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
                <div className="col">
                   <div className="p-3 ">
                      <div className='bord'>
                        <a href='/#'><img src="https://static.zingyhomes.com/projectImages/user_4876/_MG_5478.JPG" alt="" /></a>
                        <p>Kitchen</p>
                      </div>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 ">
                      <div className="bord">
                      <a href='/#'><img src="https://interiorstylehunter.com/wp-content/uploads/2016/09/Mel-Yates_Shalini-Misra_NW6_A_033-Re.jpg" alt=""/></a>
                      <p>Living Room</p>
                      </div>
                      </div>
                 </div>
                <div className="col">
                  <div className="p-3 ">
                    <div className="bord">
                    <a href='/#'><img src="https://www.magnonindia.com/wp-content/uploads/2018/06/kidsbedroom_V1.jpg" alt=""/></a>
                    <p>Bedroom</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                  <div className="p-3 ">
                    <div className="bord">
                    <a href='/#'><img src="https://www.decorandstyle.co.uk/wp-content/uploads/2016/03/capa-C%C3%B3pia9.jpg" alt=""/></a>
                    <p>Dinning Hall</p>
                    </div>
                    </div>
                </div>
               <div className="col">
                  <div className="p-3 ">
                    <div className="bord">
                    <a href='/#'><img src="https://i.pinimg.com/originals/5e/ce/22/5ece22573972b24b4da3669c8c430219.jpg" alt=""/></a>
                    <p>Stairs</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <div className="bord">
                    <a href='/#'><img src="https://s3-ap-south-1.amazonaws.com/designcafe-dev/wp-content/uploads/2019/11/17055926/multi-hued-stylish-lighting-for-balcony-design-1024x1024.jpg" alt=""/></a>
                    <p>Balcony</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                  <div className="p-3 ">
                    <div className="bord">
                    <a href='/#'><img src="https://i1.wp.com/magzhouse.com/wp-content/uploads/2019/11/Nice-Rooftop-Terrace-Design-Ideas-15.jpg?ssl=1" alt=""/></a>
                    <p>Terrece</p>
                    </div>
                    </div>
               </div>
                <div className="col">
                  <div className="p-3 ">
                    <div className="bord">
                    <a href='/#'><img src="https://i.pinimg.com/originals/92/ae/28/92ae28d2f2794677824d01b74c3ae383.jpg" alt=""/></a>
                    <p>Garden</p>
                    </div>
                    </div>
                </div>
               <div className="col">
                  <div className="p-3 ">
                    <div className="bord">
                    <a href='/#'><img src="https://www.contemporist.com/wp-content/uploads/2020/09/modern-grey-bathroom-grey-bathtub-wood-vanity-220920-1048-01.jpg" alt=""/></a>
                    <p>Bathroom</p>
                    </div>
                    </div>
                </div>
               <div className="col">
                  <div className="p-3 ">
                    <div className="bord">
                    <a href='/#'><img src="https://th.bing.com/th/id/R.b5a312c85a035d23bc5fb2f2203b5b8b?rik=FCWibSn2wIPZwA&riu=http%3a%2f%2fwww.home-designing.com%2fwp-content%2fuploads%2f2009%2f03%2fkids-room-design3.jpg&ehk=75FugFZQTBcpEaBGEi%2bD4E8%2bZyE5UEQteZ8o3OyZ1mc%3d&risl=&pid=ImgRaw&r=0" alt=""/></a>
                    <p>Kids Bedroom</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                  <div className="p-3 ">
                    <div className="bord">
                    <a href='/#'><img src="https://i.pinimg.com/originals/ca/9e/00/ca9e00e445a24d08d4b8fd18d0e68573.jpg"  alt=""/></a>
                    <p>Wordrobe</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                  <div className="p-3 ">
                    <div className="bord">
                    <a href='/#'><img src="https://www.greshamroofing.com/wp-content/uploads/2020/07/file.jpg" alt="" /></a>
                    <p>Out Door</p>
                    </div>
                    </div>
               </div>
              </div>
            </div>
            </div>
        </div>
        <div className="">

        </div>

        </div>
    );
}

export default Home;