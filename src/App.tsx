import React, { Component, useState } from 'react';
import logo from './assets/logo2.jpeg';
import food1 from './assets/food1.jpeg';
import food2 from './assets/food2.jpeg';
import food3 from './assets/food3.jpeg';
import food4 from './assets/food4.jpeg';
import food5 from './assets/food5.jpeg';
import food6 from './assets/food6.jpeg';
import food7 from './assets/food7.jpeg';
import food8 from './assets/food8.jpeg';
import food9 from './assets/food9.jpeg';
import food10 from './assets/food10.jpeg';
import food11 from './assets/food11.jpeg';

import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import { RiInstagramLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import AboutScreen from './screens/AboutScreen';
import ReservationsScreen from './screens/ReservationsScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [navIndex, setNavIndex] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const selectMobileMenuItem = (index: number) => {
    setNavIndex(index);
    setShowMobileMenu(false);
  }

  const about = "James Leger is a culinary artist whose creations transport diners on a tantalizing journey to the heart of Spain. Inspired by the rich flavors and traditions, James focuses on creating dishes that showcase fresh seasonal ingredients and employs natural cooking techniques to bring out the true essence of Spain's diverse culinary heritage."

  const Carol = () => {
    return (
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        autoFocus={false}
        stopOnHover={false}
        interval={5000}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
        selectedItem={randomNumber(0, 10)}
        animationHandler={'fade'}
        swipeable={false}
      >
        <div>
          <img src={food1} className={'Im'} />
        </div>
        <div>
          <img src={food2} className={'Im'} />
        </div>
        <div>
          <img src={food3} className={'Im'} />
        </div>
        <div>
          <img src={food4} className={'Im'} />
        </div>
        <div>
          <img src={food5} className={'Im'} />
        </div>
        <div>
          <img src={food6} className={'Im'} />
        </div>
        <div>
          <img src={food7} className={'Im'} />
        </div>
        <div>
          <img src={food8} className={'Im'} />
        </div>
        <div>
          <img src={food9} className={'Im'} />
        </div>
        <div>
          <img src={food10} className={'Im'} />
        </div>
        <div>
          <img src={food11} className={'Im'} />
        </div>
      </Carousel>
    )
  };

  return (
    <div className="App">
      <div className="Content">
        <div className='NavContainer'>
          <div className="Nav">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className='Logo'>
              <span className='The'>The</span>
              <span className='Baserri'>Baserri</span>
              <span className='Experiment'>Experiment</span>
            </div>
            <a className='NavText'>Los Angeles, CA</a>
            <a className='NavText'>{'thebaserriexperiment\n@gmail.com'}</a>
            <div className="NavItems">
              {/* <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservations
              </a> */}
           
              <a style={navIndex === 0 ? { textDecoration: 'underline' } : {}} className="App-link" onClick={() => setNavIndex(0)}>Home</a>
              <a className="App-link" style={navIndex === 1 ? { textDecoration: 'underline' } : {}} onClick={() => setNavIndex(1)}>Reservations</a>
              <a className="App-link" style={navIndex === 2 ? { textDecoration: 'underline' } : {}} onClick={() => setNavIndex(2)}>About</a>
              <a className="App-link" style={navIndex === 3 ? { textDecoration: 'underline' } : {}} onClick={() => setNavIndex(3)}>Contact</a>
              <div className='Instagram'>
                <a className='InstagramButton' href="https://www.instagram.com/baserri_la" target="_blank" rel="noopener noreferrer"><RiInstagramLine size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='MobileHeader'>
          <div className='MobileMenuIcon'>
            {!showMobileMenu &&
            <a className='MenuIcon' onClick={() => setShowMobileMenu(true)} target="_blank" rel="noopener noreferrer"><IoMdMenu size={30} /></a>
            }
          </div>
          <img src={logo} className={'MobileLogo'} />
        </div>
        {(navIndex === 0) &&
        <div className="Body">
          <div className='CarouselContainer'>
            <Carol />
          </div>
          <div className="Right">
            <div className='TitleContainer'>
              <a className='Title'>{'The Supper Club'}</a>
            </div>
            <a className='ContentText'>
              {about}
            </a>
          </div>
        </div>
        }
        {(navIndex === 1) &&
          <ReservationsScreen />
        }
        {(navIndex === 2) &&
          <AboutScreen />
        }
        {navIndex === 3 && 
          // <div className="Body">
            <ContactScreen />
          // </div>
        }
      </div>
      {showMobileMenu &&
      <div className='MobileMenu'>
        <div className='MobileMenuHeader'>
          <div className='MobileMenuIcon'>
            <a className='MenuIcon' onClick={() => setShowMobileMenu(false)} target="_blank" rel="noopener noreferrer"><IoMdClose size={36} /></a>
          </div>
        </div>
        <div className='MobileMenuItems'>
        <a style={navIndex === 0 ? { textDecoration: 'underline' } : {}} className="Mobile-App-link" onClick={() => selectMobileMenuItem(0)}>Home</a>
          <a className="Mobile-App-link" style={navIndex === 1 ? { textDecoration: 'underline' } : {}} onClick={() => selectMobileMenuItem(1)}>Reservations</a>
          <a className="Mobile-App-link" style={navIndex === 2 ? { textDecoration: 'underline' } : {}} onClick={() => selectMobileMenuItem(2)}>About</a>
          <a className="Mobile-App-link" style={navIndex === 3 ? { textDecoration: 'underline' } : {}} onClick={() => selectMobileMenuItem(3)}>Contact</a>
          <div className='Instagram' style={{ marginTop: 20 }}>
            <a className='InstagramButton' style={{ color: '#fff' }} href="https://www.instagram.com/baserri_la" target="_blank" rel="noopener noreferrer"><RiInstagramLine size={30} /></a>
          </div>
          <div className='MobileInfoContainer'>
          <a className='MobileInfo'>Los Angeles, CA</a>
          <a className='MobileInfo'>{'thebaserriexperiment@gmail.com'}</a>
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
