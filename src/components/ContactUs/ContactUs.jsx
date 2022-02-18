import React, { useState } from 'react';
import classNames from 'classnames';

import './ContactUs.scss'

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const field = (str) => {
    const result = str.replace(/\d/g,'');
  
    setName(result)
  }

  const sent = (e) => {
    e.preventDefault();
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="contact-us" id='contact'>
      <div className="container">
        <section className='contact-us__content'>
          <div className="contact-us__title">
            <span className='main__title contact-us__title--position'>Contact us!</span>

            <p className='contact-us__text'>The support staff and customer service are available to help you with any questions or needs you might have. Just drop us a line.</p>

            <p className='contact-us__text'>This site is owned and operated by Kode Tech Solutions LTD</p>

            <div className="contact-us__format">
              <p className="contact-us__format-title">Phone:</p>
              <p className="contact-us__format-text">442038857261</p>
            </div>
            <div className="contact-us__format">
              <p className="contact-us__format-title">Email:</p>
              <p className="contact-us__format-text">help@google.com</p>
            </div>
            <div className="contact-us__format">
              <p className="contact-us__format-title">Address:</p>
              <p className="contact-us__format-text">Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Republic of the Marshall Islands, MH 96960</p>
            </div>
          </div>

          <div className="form">
            <form action="" className='form__content' onSubmit={(event) => sent(event)}>
              <input 
                type="text" 
                className={classNames('form__input', {'form__input--correct': name})} 
                value={name} 
                onChange={(event) => field(event.target.value)} 
                placeholder='Name' required
              />

              <input 
                type="email" 
                className={email.length > 0 ? (/@[a-zA-Z]+\.c|@[a-zA-Z]+\.u/g.test(email) ? 'form__input form__input--correct' : 'form__input form__input--incorrect') : 'form__input'} 
                placeholder='Email' 
                value={email} 
                onChange={(event) => setEmail(event.target.value)}
              />

              <textarea 
                name="" 
                rows="3"
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                className={classNames('form__input', {'form__input--correct': message})} 
                placeholder='Message'
                required
              />

              <button className='button button--form'>Send</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;