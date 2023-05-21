import React, { Component, useState } from 'react';
import '../../src/App.css';
import image from '../assets/profileBg.jpeg';
import profile from '../assets/profile.jpeg';

import './styles.css';
const AboutScreen = () => {

  return (
    <div className="Body">
      <div className='CarouselContainer'>
        <img src={image} className={'ReservationsImage'} />
      </div>
      <div className="Right">
        <img src={profile} className={'Profile'} />
        <div className='TitleContainer'>
          <a className='Title'>{'About'}</a>
        </div>
        <a className='NavText'>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}</a>
      </div>
    </div>
  );
}

export default AboutScreen;