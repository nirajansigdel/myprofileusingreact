import React from 'react';
import MovingText from './Moving';
import './Moving.css'

function Mokk() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MovingText text="Hello World!" />
      <MovingText text="This is some moving text!" className="small" />
      <MovingText text="This text is blue!" className="blue" />
    </div>

  );
}

export default Mokk;
