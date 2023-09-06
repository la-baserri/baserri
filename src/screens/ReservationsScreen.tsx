import React, { useRef } from 'react';
import '../../src/App.css';
import image from '../assets/bg.png';
import { useForm } from '@formspree/react';

import './styles.css';
const ReservationsScreen = () => {
  const form = useRef<any>();

  const [state, handleSubmit] = useForm("mnqkabye");
  if (state.succeeded) {
    console.log('FORM SENT');
    return <p style={{ color: '#fff', textAlign: 'center', fontSize: 20, marginTop: 25, width: '100%' }}>Thanks for joining!</p>;
  };

  const TEXT = "To receive updates on the latest supper club events or to schedule a dinner, join our mailing list.";
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
        <form ref={form} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className='InputRow' style={{ marginTop: 35 }}>
            <div className='Input' style={{ width: '100%' }}>
              <label>Email</label>
              <input id="email" type="email" name="email" placeholder='Enter your email' style={{ marginRight: 20, width: '94%', paddingRight: 10 }} />
              <input style={{ display: 'none' }} id="message" type="text" name="message" value={'I would like to join the mailing list'} />
            </div>
          </div>
          <button className='Submit' type="submit" disabled={state.submitting}>{'Join mailing list'}</button>
        
        </form>
        <a className='ContentSubtext'>{SUBTEXT}</a>
      </div>
    </div>
  );
}

export default ReservationsScreen;