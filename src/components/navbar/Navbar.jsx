import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Netflix from '../../assets/netflixLogoT.png';
import netflixAvatar from '../../assets/netflixAvatar.png';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiBell } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';

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
    <nav className={`navbar ${handleShow && 'navbar__black'}`}>
      <div className='navbar__contens'>
        <div className='navbar__left'>
          <img src={Netflix} alt='logo' className='navbar__logo' />
        </div>
        <div className='navbar__right'>
          <span className='navbar__rightSearch icons'>
            <FaSearch />
          </span>
          <span className='navbar__rightText'>Kids</span>
          <span className='navbar__rightBell icons'>
            <BiBell />
          </span>
          <div className='navbar__profileLink'>
            <img
              src={netflixAvatar}
              alt='personal avatar'
              className='navbar__avatar'
            />
            <span>▼</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
