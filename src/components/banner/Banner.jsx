import React from 'react';
import './Banner.css';

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://i.ibb.co/WKRBzbH/Banner2.jpg')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contens'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__btns'>
          <button className='banner__btn'>Play</button>
          <button className='banner__btn'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
           voluptas deserunt tenetur aliquid vel molestiae velit at ipsa aperiam,
           fugiat, veniam neque laudantiusm quia repellendus sint sequi harum
           officia ea.`,
            150
          )}
        </h1>
      </div>
      <div className='banner--fadeBottom'></div>
    </header>
  );
};

export default Banner;
