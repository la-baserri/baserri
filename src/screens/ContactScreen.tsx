import React, { Component, useRef, useState } from 'react';
import '../../src/App.css';
import contact from '../assets/reservations.png';
import { RiCheckboxFill, RiCheckboxBlankLine } from 'react-icons/ri';
import { useForm, ValidationError } from '@formspree/react';
import './styles.css';
const ContactScreen = () => {

  const form = useRef<any>();

  const [checked, setChecked] = useState(true);

  const [state, handleSubmit] = useForm("mnqkabye");
  if (state.succeeded) {
    console.log('FORM SENT');
      return <p>Thanks for joining!</p>;
  }

  // const sendEmail = (e: any) => {
   
  // };

  return (
    <div className='Body' style={{ width: '100%' }}>
      <div className='Right' style={{ backgroundImage: `url(${contact})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center center' }}>
        <div className='TitleContainer' style={{ marginTop: 0, backgroundColor: '#fff' }}>
          <a className='Title'>{'Contact'}</a>
        </div>
        <div className='ContactForm'>
          <form ref={form} onSubmit={handleSubmit}>
            <div className='InputRow'>
              <div className='Input' style={{ marginRight: 25 }}>
                <label>Name</label>
                <input id="name" type="text" name="name" />
              </div>
              <div className='Input'>
                <label>Email</label>
                <input id="email" type="email" name="email" />
              </div>
            </div>
            <div className='InputRow'>
              <div className='TextArea'>
                <label>Message</label>
                <textarea id="message" name="message" />
              </div>
            </div>
            {/* <div className='SubmitRow'>
              <a className='Checkbox' onClick={() => setChecked(!checked)}>
                {checked && <RiCheckboxFill size={28} />}
                {!checked && <RiCheckboxBlankLine size={28} />}
                <span style={{ marginLeft: 10, fontSize: 14, fontFamily: 'Ubuntu Mono' }}>{'Join mailing list for exclusive updates on upcoming events'}</span>
              </a>
            </div> */}
            <button className='Submit' type="submit" disabled={state.submitting}>{'Send message'}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;