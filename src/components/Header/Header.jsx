import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import picture from '../../img/picture_header.png';

import './Header.scss'

const Header = () => {
  return (
    <header className='header' id='header'>
      <div className="header__nav">
        <div className="container">
          <div className="header__nav-content">

            <div className="header__box">
              <a href='#header' className='logo'>logo</a>

              <ul className='menu'>
                <li className='menu__item'>
                  <Link className='menu__link' to="question" spy={true} smooth={true} duration={500}>How It works</Link>
                </li>
                <li className='menu__item'>
                  <Link to="about" className='menu__link' spy={true} smooth={true} duration={500}>About</Link>
                </li>
                <li className='menu__item'>
                  <Link to="instruction" className='menu__link' spy={true} smooth={true} duration={500}>Instruction</Link>
                </li>
                <li className='menu__item'>
                  <Link to="review" className='menu__link' spy={true} smooth={true} duration={500}>Accounts</Link>
                </li>
                <li className='menu__item'>
                  <Link to="footer" className='menu__link' spy={true} smooth={true} duration={500}>Platforms</Link>
                </li>
                <li className='menu__item'>
                  <Link to="contact" className='menu__link' spy={true} smooth={true} duration={500}>Contact</Link>
                </li>
              </ul>
            </div>

            <div className='header__buttons'>
              <div className='button__language'>
                <span>en</span>
                <span className='button__arrow'>&#8250;</span>
              </div>

              <a href="#header" className='button button-header'>sign in for free</a>

              <a href='#menu' className='header__nav-menu'> </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header__title">
        <div className="container">
          <div className="header__title-content">
            <div className="header__title-box">
              <span className='header__title-title'>Trade everywhere. Invest here!</span>

              <span className='header__title-text'>We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere.</span>

              <a href="#header" className='button'>start trading</a>
            </div>

            <img className='header__title-picture' src={picture} alt="header_picture" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;