import React from 'react';
import './button.css';
const button=(props)=>{
    return(
            <button className={props.color==="primary" ? "btnDevelopment maroon" : "btnDevelopment gray"}>{props.children}</button>     
    )
}

export default button;