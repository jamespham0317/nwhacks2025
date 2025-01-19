import React from 'react';
import './NavigationBar.css';
import icon from './icon.png'

const NavigationBar = () => {
  return (
    <div className='bar'>
      <img src={icon} alt='' style={{width:'50px',height:'50px',margin:'10px',borderRadius:'15px'}}></img>
      <p className='app-name'>Recycle Radar</p>
    </div>
  );
}

export default NavigationBar;