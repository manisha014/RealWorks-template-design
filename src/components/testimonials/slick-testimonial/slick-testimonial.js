import React from 'react';
import Slider from 'react-slick';
import img from '../../../images/image.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick-testimonial.css';
import Testimonial from '../testimonial/testimonial';

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
                  <Testimonial
                      review="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                      unknown printer took a galley of type and scrambled it to make a type specimen book."
                      image={img}
                      name="Josh Callaghan"
                      designation="General Manager, REIQ"
                  ></Testimonial>
                  <Testimonial
                      review="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                      unknown printer took a galley of type and scrambled it to make a type specimen book."
                      image={img}
                      name="Josh Callaghan"
                      designation="General Manager, REIQ"
                  ></Testimonial>
              </Slider>
          </div>
        
      )
}

export default slick;

