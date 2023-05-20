import React, { Component, useState } from 'react';
import '../../src/App.css';
import contact from '../assets/reservations.png';
 
import './styles.css';
const ContactScreen = () => {

  return (
    <div className='container'>
      <img src={contact} className={'ContactBg'} />

      <div className='TitleContainer'>
        <a className='Title'>{'Contact'}</a>
      </div>
      <div className='ContactForm'>

      </div>
    </div>
  );
}

export default ContactScreen;