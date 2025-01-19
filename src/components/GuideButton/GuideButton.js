import React from 'react';
import './GuideButton.css';

const GuideButton = ({ onRecyclingGuideButton }) => {
  return (
    <div>
      <button className='button' onClick={onRecyclingGuideButton}>Recycling Guide</button>
    </div>
  );
}

export default GuideButton;