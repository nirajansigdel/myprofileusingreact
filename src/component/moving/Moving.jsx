import React from 'react';
import './Moving.css'


function MovingText(props) {
  return (
    <div className="moving-text-container">
      <p className="moving-text">{props.text}</p>
    </div>
  );
}

export default MovingText;
