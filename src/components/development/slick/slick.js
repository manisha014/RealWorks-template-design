import React from 'react';
import Slider from 'react-slick';
import img from '../../../images/Group.png';
const slick=(props)=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return(
          <div style={{width:"50%", height:"50%"}}>
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

