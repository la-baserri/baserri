import React, { Component, useState } from 'react';
import '../../src/App.css';
import image from '../assets/bg.png';

import './styles.css';
const ReservationsScreen = () => {

  const TEXT = "TO receive updates on the latest supper club events or to schedule a dinner, join our mailing list.";
  const SUBTEXT = "Thank you for supporting the Baserri experiment.  We refund in full three days prior to event.  We keep a 50$ conscience fee this is do to the fact we locally source and utilize the farmers market to keep our menu as fresh and sustainable as possible.";
  return (
    <div className="Body">
      <div className='CarouselContainer'>
        <img src={image} className={'ReservationsImage'} />
      </div>
      <div className="Right">
        <div className='TitleContainer'>
          <a className='Title'>{'Reservations'}</a>
        </div>
        <a className='ContentText'>{TEXT}</a>
        <div className='InputRow' style={{ marginTop: 35 }}>
          <div className='Input' style={{ width: '100%' }}>
            <label>Email</label>
            <input type="text" name="user_name" placeholder='Enter your email' style={{ marginRight: 20, width: '94%', paddingRight: 10 }} />
          </div>
        </div>
        <input className='Submit' type="submit" value="Join mailing list" />
        <a className='ContentSubtext'>{SUBTEXT}</a>
      </div>
    </div>
  );
}

export default ReservationsScreen;