import React from 'react';
import Slider from 'react-slick';
import img from '../../../images/Group.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick.css';
// import img1 from '../../../images/Combined Shape (1).png';

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
                // height="50%" width="35%"
              />  
              <img
                src={img}
                alt="First slide"
                // height="50%" width="35%"
              />  
              <img
                src={img}
                alt="First slide"
                // height="50%" width="35%"
              />  

        </Slider>
          </div>
        
      )
}

export default slick;

