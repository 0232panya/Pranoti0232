
import React, { useState } from 'react'
import './Carousal.css'
import Slider from 'react-slick';

const Carousal = () => {

    const image = [
        {img : "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/ec-image-gallery-1668703688-R5CXo/desktop-1668703694-Pe79s/ec5-desktop-1668703725-pivX2.jpg"},
        {img : "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/ec-image-gallery-1668703688-R5CXo/desktop-1668703694-Pe79s/ec6-desktop-1668703726-imSna.jpg"},
        {img : "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/ec-image-gallery-1668703688-R5CXo/desktop-1668703694-Pe79s/ec4-desktop-1668703723-m9a7s.jpg"},
        {img : "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/ec-image-gallery-1668703688-R5CXo/desktop-1668703694-Pe79s/ec3-desktop-1668703721-0avZ9.jpg"},
        {img : "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/ec-image-gallery-1668703688-R5CXo/desktop-1668703694-Pe79s/ec1-desktop-1668703714-bBx0N.jpg"},
        {img : "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/ec-image-gallery-1668703688-R5CXo/desktop-1668703694-Pe79s/ec2-desktop-1668703718-3pPrB.jpg"},
    ];

    const [imageIndex , setImageIndex] = useState(0);

    const NextArrow =({onClick}) =>{
        return(
            <div className='arrow next' onClick={onClick}>
                <button className='Arrow_Btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>
        )
    }

    const PrevArrow = ({onClick}) =>{
        return (
            <div className='arrow prev' onClick={onClick}>
                <button className='Arrow_Btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                </button>
            </div>
        )
    }




    var settings = {
        infinite : true,
        lazyLoad : true,
        speed : 500,
        slidesToShow : 3,
        centerMode :true,
        autoPlay: true,
        autoPlaySpeed : 5000,
        centerPadding : 0,
        nextArrow : <NextArrow />,
        prevArrow : <PrevArrow />,
        beforeChange : (current, next) => setImageIndex(next)
    };

    

  return (
    <div className='Carousal'>
        <Slider {...settings}>
            {
                image.map((img, idx) =>{
                    return(
                        <div className={idx === imageIndex ? "slideS activeSlide" : "slideS"}>
                            <img src={img.img} alt=' ' />
                        </div>
                    )
                })
            }
        </Slider>

        

    </div>
  )
}

export default Carousal;
