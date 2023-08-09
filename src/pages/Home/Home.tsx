import Banner from '../../components/banner/Banner';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';

const Home = () => {
  const rows: any = () => {
    const row = [];
    for (let i = 0; i < 60; i++) {
      row.push(<h1 key={i}>test</h1>);
    }
    return row;
  };

  return (
    <div className='home'>
      <Navbar />
      <Banner />
      {/* {rows} */}

    </div>
  );
};

export default Home;
