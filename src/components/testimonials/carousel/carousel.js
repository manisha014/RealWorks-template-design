import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../../../images/image.svg';
import Testimonial from '../testimonial/testimonial';
// import img from '../../../images/Group.png';
const carousel=()=>{
    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
  
    return (
    //   <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel>
        <Carousel.Item>
          <Testimonial
              review="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
              unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={img}
              name="Josh Callaghan"
              designation="General Manager, REIQ"
          ></Testimonial>
        </Carousel.Item>
        <Carousel.Item>
          <Testimonial
                review="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen book."
                image={img}
                name="Josh Callaghan"
                designation="General Manager, REIQ"
            ></Testimonial>
        </Carousel.Item>
      </Carousel>
    );

}
  
export default carousel;