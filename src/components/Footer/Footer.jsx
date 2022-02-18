import React from 'react';
import Link from 'react-scroll/modules/components/Link';

import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className="container">
        <div className="footer__content">
          <a href='#header' className='logo footer__logo'>logo</a>

          <ul className='footer__nav'>
            <li className='footer__item'>
              <Link to="header" className='footer__link' spy={true} smooth={true} duration={500}>About us</Link>
            </li>

            <li className='footer__item'>
              <Link to="instruction" className='footer__link' spy={true} smooth={true} duration={500}>Instructions</Link>
            </li>

            <li className='footer__item'>
              <Link to="footer" className='footer__link' spy={true} smooth={true} duration={500}>Platforms</Link>
            </li>

            <li className='footer__item'>
              <Link to="contact" className='footer__link' spy={true} smooth={true} duration={500}>Contact Us</Link>
            </li>

            <li className='footer__item'>
              <Link to="header" className='footer__link' spy={true} smooth={true} duration={500}>Sign in</Link>
            </li>

            <li className='footer__item'>
              <Link to="header" className='footer__link' spy={true} smooth={true} duration={500}>Sign up for free</Link>
            </li>
          </ul>

          <div className="footer__box footer__grid--1">
            <span className='footer__title'>Information and high risk warning:</span>

            <p className='footer__text'>Trading with foreign exchange (FX), contract for differences (CFDs) and precious metals carries a high level of risk that may not be suitable for all investors. Leverage creates additional risk and loss exposure. Before you decide to trade foreign exchange or contract for differences, carefully consider your investment objectives, experience level, and risk tolerance.</p>
          </div>

          <div className="footer__box footer__grid--2">
            <span className='footer__title footer__grid--2'>Legal disclaimer:</span>

            <p className='footer__text'>Forex trading entails significant risks and is not appropriate for all investors. The possibility of incurring substantial losses should be taken into account. It is therefore important to understand the possible consequences of investing. Traders should weigh their earning potential against the risks involved and act accordingly. Interactive Trade Ltd operating under brand and using domenLink domain within the European Economic Area.</p>
          </div>
        </div>

        <div className="footer__policy">
            <p>Copyright 2020, All Right Reserved</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Risk Warnings</p>
            <p>Anti-Money Laundering</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;