import React from 'react';
import './HomeButton.css';
import home from './home.png';

const HomeButton = ({ onHomeButton }) => {
  return (
    <div>
      <span className='home-button' onClick={onHomeButton}>
        <img alt='icon' src={home} />
        <p className='home-text'>Home</p>
      </span>
    </div>
  );
}

export default HomeButton;