import React from 'react';
import './NewsBox.css';
import news from './news.png';
import calendar from './calendar.png';

const NewsBox = () => {
  return (
    <div>
      <div className='box'>
        <div className='news-title' style={{display: 'flex' }}>
          <img alt='icon' src={news} className='news-img'/>
          <p className='title'>News</p>
        </div>
        <div className='articles'>
          <p className='article-title'>Polluted Lakes Are Being Cleansed Using Floating Wetlands...</p>
          <p className='see-more'>see more</p>
          <p className='publisher'>WIRED</p>
          <hr></hr>
          <p className='article-title'>KC Recycling to expand PP plant in British Columbia...</p>
          <p className='see-more'>see more</p>
          <p className='publisher'>recyclebc</p>
          <hr></hr>
          <p className='article-title'>The jewellery industry loves recycled gold. Is that a good thing?</p>
          <p className='see-more'>see more</p>
          <p className='publisher'>Vogue Business</p>
        </div>

        <div className='news-title' style={{display: 'flex' }}>
          <img alt='icon' src={calendar} className='calendar-img'/>
          <p className='title'>Events</p>
        </div>
        <div className='articles'>
          <p> Event: Green Futures Recycling Fair</p>
          <p> Date: Saturday, January 26, 2025</p>
          <p> Time: 10:00am to 4:00pm</p>
          <p> Location: Evergreen Community Center, 123 Greenway Drive, Vancouver, BC</p>
          <p> Event Details: Join us for the Green Futures Recycling Fair...</p>
          <p className='see-more'>see more</p>
        </div>
      </div>
    </div>
  );
}

export default NewsBox;