import React from 'react';
import classes from './testimonial.module.scss';
const testimonial=(props)=>{
    return(
        <div className={classes.outer}>
            <p className={classes.review}>{props.review}</p>
            <img className={classes.image} src={props.image} alt="person"></img>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.designation}>{props.designation}</p>
        </div>
    )
}

export default testimonial;