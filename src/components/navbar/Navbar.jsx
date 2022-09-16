import React from 'react';
import './Navbar.css';
import Netflix from '../../assets/netflixLogo.png';
import netflixAvatar from '../../assets/netflixAvatar.png';

const Navbar = () => {
  return (
    <div>
      <img src={Netflix} alt='logo' className='navbar__logo' />
      <img
        src={netflixAvatar}
        alt='personal avatar'
        className='navbar__avatar'
      />
      <h1>navbar</h1>
    </div>
  );
};

export default Navbar;
