import React from 'react';
import './Banner.css';

const Banner = () => {
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
        <h1 className='banner_description'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          voluptas deserunt tenetur aliquid vel molestiae velit at ipsa aperiam,
          fugiat, veniam neque laudantium quia repellendus sint sequi harum
          officia ea.
        </h1>
      </div>
    </header>
  );
};

export default Banner;
