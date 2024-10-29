import React from 'react';
import "../assete/css/scroll.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Scrolltop = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };
  return (
   <>
   <div className='dd' id="progress" onClick={scrollToTop}>
   <span id="progress_value">
   <FontAwesomeIcon icon={faChevronUp} />
   </span>
        </div>
   </>
  )
}

export default Scrolltop