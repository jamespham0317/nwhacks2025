import React from 'react';
import './GuideButton.css';

const GuideButton = ({ onRecyclingGuideButton }) => {
  return (
    <div>
      <button className='button' onClick={onRecyclingGuideButton}>Recycling Assistant</button>
      <button className='button'>Piazza</button>
    </div>
  );
}

export default GuideButton;