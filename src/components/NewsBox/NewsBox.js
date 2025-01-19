import React from 'react';
import './NewsBox.css';
import news from './news.png';

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
      </div>
    </div>
  );
}

export default NewsBox;