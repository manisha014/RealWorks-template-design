import React from 'react';
import Part from './part/part';
import img1 from '../../images/Group 3 4.png';
import img2 from '../../images/Frame 4.png';
import Carousel from './carousel/carousel';
// import Slick from './slick/slick';
// import img3 from '../../images/Group.png';
import img4 from '../../images/Group 143 3.png';
import img5 from '../../images/Group 6.png';
import RightPart from './rightPart/rightPart';
import classes from './development.module.scss';
const development=()=>{
    return(
        <div id="development" className={classes.outer}>
            <div className={classes.margin}>
                <Part btnText="LIVE"
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
            <div className={classes.content}>
                <Part btnText="COMING SOON"
                    heading="Give your tenants a simple mobile signing experience"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book."
                    >
                    </Part>
                    <div className={classes.image}>
                        <Carousel></Carousel>
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
            <div className={classes.content}>
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