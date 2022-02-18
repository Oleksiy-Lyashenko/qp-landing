import React from 'react';
import picture_review from '../../img/Icon.jpg';

import './Reviews.scss'

const Reviews = () => {
  return (
    <section className='reviews page__section' id='about'>
      <div className="reviews__title">
        <span className='main__title'>People love<span className='main__title-line'>Big Invest</span></span>

        <div className="reviews__arrow">
          <div className='review__arrow'>&lt;</div>
          <div className='review__arrow'>&gt;</div>
        </div>
      </div>

      <div className="review">
        <div className="review__title">
          <img src={picture_review} alt="picture_review" className='review__picture'/>

          <div className="review__fulltext">
            <div className="review__name">Albert Abello</div>
            <div className="review__position">Director of Growth</div>
          </div>
        </div>

        <p className='review__bkc'>	&#10076;&#10076;</p>

        <div className="review__box">
          <div className='review__arrow review__arrow--top'>&lt;</div>
          <p className='review__text'>This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.</p>
          <div className='review__arrow review__arrow--top'>&gt;</div>
        </div>

        <div className="review__slide">
          <div className='review__arrow review__arrow--bottom'>&lt;</div>
          <div className='review__number'>01 / 04</div>
          <div className='review__arrow review__arrow--bottom'>&gt;</div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;