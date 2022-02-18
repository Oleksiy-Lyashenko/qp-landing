import React from 'react';

import './GetStart.scss'

const GetStart = () => {
  return (
    <section className='get-start page__section' id='instruction'>
      <span className='main__title'>Getting Started Is <span className='main__title-line'>Fast &#38; Easy</span></span>

      <div className="get-start__container">

        <div className="box__dotted box__dotted--1"></div>
        <div className="box__dotted box__dotted--2"></div>
        <div className="box__dotted box__dotted--3"></div>

        <div className="box box--left">
          <h2 className='box__number'>01.</h2>

          <p className='box__title'>Register</p>

          <p className='box__text'>Complete the simple registration to get your trading credentials.</p>
        </div>

        <div className="box box--right box--position">
          <h2 className='box__number'>02.</h2>

          <p className='box__title'>Verification</p>

          <p className='box__text'>Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes.</p>
        </div>

        <div className="box box--left box--position">
          <h2 className='box__number'>03.</h2>

          <p className='box__title'>Deposit funds</p>

          <p className='box__text'>Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps.</p>
        </div>

        <div className="box box--right box--position">
          <h2 className='box__number'>04.</h2>

          <p className='box__title'>Start Trading</p>

          <p className='box__text'>Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account.</p>
        </div>
      </div>
    </section>
  );
};

export default GetStart;