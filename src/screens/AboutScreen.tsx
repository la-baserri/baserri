import React, { Component, useState } from 'react';
import '../../src/App.css';
import image from '../assets/profileBg.jpeg';
import profile from '../assets/profile.jpeg';

import './styles.css';
const AboutScreen = () => {

  const bio = "James Leger is a seasoned chef with 16 years of professional culinary experience. Having spent 11 years honing his skills in the culinary mecca of New York City,  he discovered his passion for Spanish cuisine and the communal dining culture that accompanies it. Inspired by the rich flavors and traditions, James now focuses on creating dishes that showcase fresh seasonal ingredients and employing natural cooking techniques to bring out the  true essence of Spain's diverse culinary heritage. James Leger is a culinary artist whose creations transport diners on a tantalizing journey to the heart of Spain."

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
        <a className='ContentText'>{bio}</a>
      </div>
    </div>
  );
}

export default AboutScreen;