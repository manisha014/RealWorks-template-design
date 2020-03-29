import React from 'react';
import classes from './rightPart.module.scss';
import Button from '../Button/Button';
const rightPart=(props)=>{
    return(
        <div className={classes.content}>
            <Button color={props.color}>{props.btnText}</Button>
            <p className={classes.heading}>{props.heading}</p>
            <p className={classes.text}>{props.text}</p>
        </div>
    );
}

export default rightPart;