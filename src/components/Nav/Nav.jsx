import React from 'react';
import plus from '../../img/plus.png';

import './Nav.scss';


const Nav = () => {
  return (
    <nav className='nav page__menu' id='menu'>
      <div className="container">
        <div className="header__nav-content nav__header">
          <a href='/' className='logo'>logo</a>

          <a href="#">
            <img src={plus} alt="" className='close'/>
          </a>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            <a href='#question' className="nav__link">How It works</a>
          </li>

          <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>

          <li className="nav__item">
            <a href="#instruction" className="nav__link">Instruction</a>
          </li>

          <li className="nav__item">
            <a href="#review" className="nav__link">Accounts</a>
          </li>

          <li className="nav__item">
            <a href="#footer" className="nav__link">Platforms</a>
          </li>

          <li className="nav__item">
            <a href='#contact' className="nav__link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;