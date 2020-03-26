import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../../../images/Group.png';
const carousel=()=>{
    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
  
    return (
    //   <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src={img}
            alt="First slide"
            height="50%" width="35%"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block"
            src={img}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    );

}
  
export default carousel;