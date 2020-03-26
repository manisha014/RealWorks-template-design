import React from 'react';
// import Testimonial from './testimonial/testimonial';
// import img from '../../images/image.svg';
import Carousel from './carousel/carousel';
// import Slick from './slick-testimonial/slick-testimonial';
const testimonials=()=>{
    return(
        <div id="testimonials">
            {/* <Testimonial
            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
             unknown printer took a galley of type and scrambled it to make a type specimen book."
             image={img}
             name="Josh Callaghan"
             designation="General Manager, REIQ"
        ></Testimonial> */}
        <Carousel></Carousel>
        </div>
    )
}

export default testimonials;