import React from 'react';
import classes from './subscribe.module.scss';
const subscribe=()=>{
    return(
        <div className={classes.subscribeSection}>
            <h2 className={classes.heading}>Try the new, simpler Form 18a<br></br>process Today</h2>
            <button className={classes.subscribeButton}>Subscribe now</button>
        </div>
    )
}

export default subscribe;