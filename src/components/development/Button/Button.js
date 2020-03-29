import React from 'react';
import './button.css';
const button=(props)=>{
    return(
            <button className={props.color==="primary" ? "btn maroon" : "btn gray"}>{props.children}</button>     
    )
}

export default button;