import React, { Component, useRef, useState } from 'react';
import '../../src/App.css';
import contact from '../assets/reservations.png';
import { RiCheckboxFill, RiCheckboxBlankLine } from 'react-icons/ri';

import './styles.css';
const ContactScreen = () => {

  const form = useRef<any>();

  const [checked, setChecked] = useState(true);

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
    <div className='Body' style={{ width: '100%' }}>
      <div className='Right' style={{ backgroundImage: `url(${contact})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center center' }}>
        {/* <img src={contact} className={'ContactBg'} /> */}

        <div className='TitleContainer' style={{ marginTop: 0, backgroundColor: '#fff' }}>
          <a className='Title'>{'Contact'}</a>
        </div>
        <div className='ContactForm'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='InputRow'>
              <div className='Input'>
                <label>Name</label>
                <input type="text" name="user_name" />
              </div>
              <div className='Input'>
                <label>Email</label>
                <input type="email" name="user_email" />
              </div>
            </div>
            {/* <div className='InputRow'>
          <div className='Input'>
            <label>Email</label>
            <input type="text" name="user_name" />
          </div>
          <div className='Input'>
            <label>Subject</label>
            <input type="email" name="user_email" />
          </div>
        </div> */}
            <div className='InputRow'>
              <div className='TextArea'>
                <label>Message</label>
                <textarea name="message" />
              </div>
            </div>
            <div className='SubmitRow'>
              <a className='Checkbox' onClick={() => setChecked(!checked)}>
                {checked && <RiCheckboxFill size={28} />}
                {!checked && <RiCheckboxBlankLine size={28} />}
                <span style={{ marginLeft: 10, fontSize: 14, fontFamily: 'Ubuntu Mono' }}>{'Join mailing list for exclusive updates on upcoming events'}</span>
              </a>
            </div>
            <input className='Submit' type="submit" value="Send message"/>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;