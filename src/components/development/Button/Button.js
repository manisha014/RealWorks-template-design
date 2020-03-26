import React from 'react';
// import classes from './button.module.scss';
const button=(props)=>{
    const style={
        width: "30%",
        borderRadius: "50px",
        backgroundColor:"#b83344",
        color:"white",
        border:"none",
        padding:"3px"
        // backgroundColor: {props.bgColor}
    }
    return(
            <button style={style}>{props.children}</button>     
    )
}

export default button;