import React, { useState } from 'react';
import classNames from 'classnames';

import plus from '../../img/plus.png';
import './Questions.scss';

const Questions = () => {

  const [heandle, setHeandle] = useState({
    question_1: false,
    question_2: false,
    question_3: false,
    question_4: false,
    question_5: false,
  });

  const prevHeandle = (name) => {
    const prev = {}

    for (let key in heandle) {
      prev[key] = false;
    }

    setHeandle({...prev, [name]: !heandle[name]})
  }

  return (
    <section className='questions page__section' id='question'>
      <span className='main__title'>Frequently asked <span className='main__title-line'>questions</span></span>

      <div className="questions__box">
        <div className="question">

          <div className="question__head">
            <span className='question__title'>How do I change my details?</span>

            <img 
              src={plus}
              alt=""
              className={classNames("question__img", {"question__img--push": heandle.question_1}, {"question__img--close": !heandle.question_1})}
              onClick={(e) => prevHeandle(`question_1`)}
            />
          </div>

          <div className={classNames("question__text", {"question__text--show": heandle.question_1 })}>
            We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!
          </div>
        </div>

        <div className="question">

          <div className="question__head">
            <span className='question__title'>How do I change my details?</span>

            <img 
              src={plus}
              alt=""
              className={classNames("question__img", {"question__img--push": heandle.question_2}, {"question__img--close": !heandle.question_2})}
              onClick={(e) => prevHeandle(`question_2`)}
            />
          </div>

          <div className={classNames("question__text", {"question__text--show": heandle.question_2 })}>
            We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!
          </div>
        </div>

        <div className="question">

          <div className="question__head">
            <span className='question__title'>How do I change my details?</span>

            <img 
              src={plus}
              alt=""
              className={classNames("question__img", {"question__img--push": heandle.question_3}, {"question__img--close": !heandle.question_3})}
              onClick={(e) => prevHeandle(`question_3`)}
            />
          </div>

          <div className={classNames("question__text", {"question__text--show": heandle.question_3 })}>
            We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!
          </div>
        </div>

        <div className="question">

          <div className="question__head">
            <span className='question__title'>How do I change my details?</span>

            <img 
              src={plus}
              alt=""
              className={classNames("question__img", {"question__img--push": heandle.question_4}, {"question__img--close": !heandle.question_4})}
              onClick={(e) => prevHeandle(`question_4`)}
            />
          </div>

          <div className={classNames("question__text", {"question__text--show": heandle.question_4 })}>
            We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!
          </div>
        </div>

        <div className="question">

          <div className="question__head">
            <span className='question__title'>How do I change my details?</span>

            <img 
              src={plus}
              alt=""
              className={classNames("question__img", {"question__img--push": heandle.question_5}, {"question__img--close": !heandle.question_5})}
              onClick={(e) => prevHeandle(`question_5`)}
            />
          </div>

          <div className={classNames("question__text", {"question__text--show": heandle.question_5 })}>
            We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!
          </div>
        </div>

      </div>
    </section>
  );
};

export default Questions;