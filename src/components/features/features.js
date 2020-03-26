import React from 'react';
import image from '../../images/Shape.svg';
import Feature from './feature/feature';
const features=()=>{
    return(
        <div id="features" style={{display: "flex", padding:"0rem 9rem"}}>
            <Feature
                img={image}
                feature="Save Time"
                description="Pre-population of the form allowing users to focus on the information gaps"
            />
            <Feature
                img={image}
                feature="Reduce errors"
                description="Clear indication of where errors exist plus data field validation"
            />
            <Feature
                img={image}
                feature="Easy to Use"
                description="A simple user-interface that anyone can use"
            />
        </div>
    )
}

export default features;