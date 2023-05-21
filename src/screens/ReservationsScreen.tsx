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
        <a className='NavText'>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}</a>
        <div className='InputRow' style={{ marginTop: 35 }}>
          <div className='Input'>
            <label>Email</label>
            <input type="text" name="user_name" style={{ marginRight: 0, width: 300 }} />
          </div>
        </div>
        <input className='Submit' type="submit" value="Join mailing list" />

      </div>
    </div>
  );
}

export default ReservationsScreen;