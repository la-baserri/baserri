import React, { Component, useRef, useState } from 'react';
import '../../src/App.css';
import contact from '../assets/reservations.png';
 
import './styles.css';
const ContactScreen = () => {

  const form = useRef<any>();

  const sendEmail = (e: any) => {
    // e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  return (
    <div className='container'>
      <img src={contact} className={'ContactBg'} />

      <div className='TitleContainer'>
        <a className='Title'>{'Contact'}</a>
      </div>
      <div className='ContactForm'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='InputRow'>
          <div className='Input'>
            <label>First name</label>
            <input type="text" name="user_name" />
          </div>
          <div className='Input'>
            <label>Last name</label>
            <input type="email" name="user_email" />
          </div>
        </div>
        <div className='InputRow'>
          <div className='Input'>
            <label>Email</label>
            <input type="text" name="user_name" />
          </div>
          <div className='Input'>
            <label>Subject</label>
            <input type="email" name="user_email" />
          </div>
        </div>
        <div className='InputRow'>
        <div className='TextArea'>
        <label>Message</label>
        <textarea name="message" />
        </div>
        </div>
       
        <input className='Submit' type="submit" value="Send message" />
      </form>
      </div>
    </div>
  );
}

export default ContactScreen;