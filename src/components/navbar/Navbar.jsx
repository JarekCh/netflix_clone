import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Netflix from '../../assets/netflixLogoT.png';
import netflixAvatar from '../../assets/netflixAvatar.png';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiBell } from 'react-icons/bi';

const Navbar = () => {
  const [handleShow, setHandleShow] = useState(false);
  console.log(
    '🚀 ~ file: Navbar.jsx ~ line 8 ~ Navbar ~ handleShow',
    handleShow
  );

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setHandleShow(true);
    } else {
      setHandleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => {
      window.removeEventListener('scroll', transitionNavbar);
    };
  }, []);

  return (
    <div className={`navbar ${handleShow && 'navbar__black'}`}>
      <div className='navbar__contens'>
        <IoMdArrowDropdown />
        <BiBell />
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
