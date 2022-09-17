import React from 'react';
import './Navbar.css';
import Netflix from '../../assets/netflixLogoT.png';
import netflixAvatar from '../../assets/netflixAvatar.png';

const Navbar = () => {
  return (
    <div className='navbar navbar__black'>
      <div className='navbar__contens'>
        <img src={Netflix} alt='logo' className='navbar__logo' />
        <img
          src={netflixAvatar}
          alt='personal avatar'
          className='navbar__avatar'
        />
      </div>
    </div>
  );
};

export default Navbar;
