import { useState, useEffect } from 'react';
import './Navbar.css';
import Netflix from '../../assets/netflixLogoT.png';
import netflixAvatar from '../../assets/netflixAvatar.png';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiBell } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import useMediaQuery from '../../utils/hooks/useMadiaQuery';

const Navbar = () => {
  const [handleShow, setHandleShow] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

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
        {/* LEFT SIDE */}
        <div className='navbar__left'>
          <img src={Netflix} alt='logo' className='navbar__logo' />

          {isAboveMediumScreens ? (
            <div className='navbar__medScreensMenu navbar__menu'>
              <div>Home</div>
              <div>Series</div>
              <div>Films</div>
              <div>New & Popular</div>
              <div>My List</div>
              <div>Browse by Languages</div>
            </div>
          ) : (!isAboveMediumScreens &&
            <div className='navbar__menu'>
              <div className='navbar__mobileManu' onClick={() => setIsMenuToggled(currVal => !currVal)}>
                Browse
                <span>▼</span>
                {isMenuToggled &&
                  <ul>
                    <li>Home</li>
                    <li>Series</li>
                    <li>Films</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                  </ul>
                }
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className='navbar__right'>
          <span className='navbar__rightSearch icons'>
            <FaSearch />
          </span>
          {isAboveMediumScreens &&
            <span className='navbar__rightText'>Kids</span>}
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
