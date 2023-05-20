import React, { Component, useState } from 'react';
import '../../src/App.css';
import image from '../assets/bg.png';

import './styles.css';
const ReservationsScreen = () => {

  return (
    <div className="Body">
      <div className='CarouselContainer'>
        <img src={image} className={'ReservationsImage'} />
      </div>
      <div className="Right">
        <div className='TitleContainer'>
          <a className='Title'>{'Reservations'}</a>
        </div>
        <a className='NavText'>{'The brown dog jumped over the green shrub and ran over to the ball. The brown dog jumped over the green shrub and ran over to the ball. The brown dog jumped over the green shrub and ran over to the ball.\n\nThe brown dog jumped over the green shrub and ran over to the ball. '}</a>
      </div>
    </div>
  );
}

export default ReservationsScreen;