import React from 'react';
import './GuideButton.css';
import ForumIcon from '@mui/icons-material/Forum';
import AssistantIcon from '@mui/icons-material/Assistant';

const GuideButton = ({ onRecyclingGuideButton }) => {
  return (
    <div className='vertical'>
      <button className='button' onClick={onRecyclingGuideButton}>
        <AssistantIcon sx={{padding:5,fontSize:50}}/>
        Recycling Assistant
      </button>
      <button className='button'>
        <ForumIcon sx={{padding:5,fontSize:50}}/>
        Community Forum
      </button>
    </div>
  );
}

export default GuideButton;