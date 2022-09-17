import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';

const Home = () => {
  const rows = () => {
    const row = [];
    for (let i = 0; i < 60; i++) {
      row.push(<h1 key={i}>test</h1>);
    }
    return row;
  };

  return (
    <div className='home'>
      <Navbar />
      <div>{rows()}</div>
      {/* banner */}
      {/* rows */}
    </div>
  );
};

export default Home;
