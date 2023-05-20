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
        <a className='NavText'>{'The brown dog jumped over the green shrub and ran over to the ball. The brown dog jumped over the green shrub and ran over to the ball. The brown dog jumped over the green shrub and ran over to the ball.\n\nThe brown dog jumped over the green shrub and ran over to the ball. '}</a>
      </div>
    </div>
  );
}

export default AboutScreen;