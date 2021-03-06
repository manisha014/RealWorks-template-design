import React from 'react';
import Part from './part/part';
import img1 from '../../images/frame1.png';
import img2 from '../../images/frame2.png';
import img4 from '../../images/frame4.png';
import img5 from '../../images/frame5.png';
import RightPart from './rightPart/rightPart';
import classes from './development.module.scss';
import Slick from './slick/slick';
const development=()=>{
    return(
        <div id="development" className={classes.developmentSection}>
            <div className={`${classes.marginTop8} ${classes.responsiveReverse}`}>
                <Part btnText="LIVE" color="primary"
                    heading="Enjoy a simplified General Tenancies Agreement"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book."
                    >
                </Part>
                <div className={classes.image}>
                    <img className={classes.rightImage} src={img1} alt="email-img"></img>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.image}>
                    <img className={classes.leftImage} src={img2} alt="email-img"></img>
                </div>
                <RightPart btnText="COMING SOON"
                    heading="Simplify the process with one-touch execution."
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book."
                    >
                </RightPart>
            </div>
            <div className={` ${classes.responsiveReverse}`}>
                <Part btnText="COMING SOON"
                    heading="Give your tenants a simple mobile signing experience"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book."
                    >
                </Part>
                <div>
                    <Slick></Slick>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.image}>
                    <img className={classes.leftImage} src={img4} alt="email-img"></img>
                </div>
                <RightPart btnText="COMING SOON"
                    heading="Give your tenants a simple mobile signing experience"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book."
                    >
                </RightPart>
            </div>
            <div className={` ${classes.responsiveReverse}`}>
                <Part btnText="COMING SOON"
                    heading="Reduce risk with automated register of events"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book."
                    >
                </Part>
                <div className={classes.image}>
                    <img className={classes.rightImage} src={img5} alt="email-img"></img>
                </div>
            </div>
        </div>
        
    )
}

export default development;