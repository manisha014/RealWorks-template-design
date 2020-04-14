import React from 'react';
import Accordion from './Accordion/accordion';
import './faq.css';
const faq=()=>{
    const accordionTextStyle={
        fontWeight: "400",
        fontSize: "14px",
        marginBottom: "0",
        marginTop: "8px"
      }
    return(
        <div id="FAQ" className="faqWrapper">
            <p className="heading">Frequently asked questions</p>
            <div className="outer">
                <div className="inner">
                    <Accordion title="Why have Realworks changed the form?">
                        <p style={accordionTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged.</p>
                    </Accordion>
                    <Accordion title="Can i use the old form?">
                        <p style={accordionTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Accordion>
                    <Accordion title="Question">
                        <p style={accordionTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Accordion>
                    <Accordion title="Question">
                        <p style={accordionTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Accordion>
                </div>
                <div className="inner">
                    <Accordion title="Is this form legally binding?">
                        <p style={accordionTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.</p>
                    </Accordion>
                    <Accordion title="Can i still print the form?">
                        <p style={accordionTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </Accordion>
                    <Accordion title="Question">
                        <p style={accordionTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Accordion>
                    <Accordion title="Question">
                        <p style={accordionTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Accordion>
                </div>
                
            </div>
        </div>
        
    )
}

export default faq;