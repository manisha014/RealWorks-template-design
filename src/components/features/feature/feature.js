import React from 'react';
// import image from '../../images/Shape.svg';
import classes from './feature.module.scss';
const feature=(props)=>{
    return(
        <div className={classes.feature}>
            <img src={props.img} alt="icon"></img>
            <p className={`${classes.featureHeading}`}>{props.feature}</p>
            <p className={classes.featurePara}>{props.description}</p>
        </div>
    )
}

export default feature;