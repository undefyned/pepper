import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import UpArrow from '@material-ui/icons/ExpandLessTwoTone';

const ScrollToTop = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none', position: 'absolute', right: 0 }}>
            <UpArrow />
        </IconButton>
  );
}

export default ScrollToTop;