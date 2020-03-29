import React, { useState, useRef, useEffect } from 'react';
import './accordion.css';
const Accordion = (props) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  }

  const titleStyle = {
    fontWeight: 600,
    fontSize: '14px',
  }

  return (
    <div className="accordion-section">
      <button className={active ? 'accordion-title active': 'accordion-title'} onClick={toogleActive}>
        <span style={titleStyle}>{props.title}</span>
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
      >
        {props.children}
      </div>
    </div>
  )
}

export default Accordion;