import React from 'react';
import Slider from 'react-slick';
import img from '../../../images/frame3.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick.css';


const slick=(props)=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:5000,
      };

      return(
          <div>
                <Slider {...settings}>
              <img
                src={img}
                alt="First slide"
              />  
              <img
                src={img}
                alt="First slide"
              />  
              <img
                src={img}
                alt="First slide"
              />  
        </Slider>
          </div>
        
      )
}

export default slick;

