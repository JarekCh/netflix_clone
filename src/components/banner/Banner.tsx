import './Banner.css';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa';

const Banner = () => {
  const truncate = (string: string, n: number) => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
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
        <h1 className='banner__description'>
          {truncate(
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
           voluptas deserunt tenetur aliquid vel molestiae velit at ipsa aperiam,
           fugiat, veniam neque laudantiusm quia repellendus sint sequi harum
           officia ea.`,
            150
          )}
        </h1>
        <div className='banner__btns'>
          <button className='banner__btnPlay'>
            <FaPlay className='banner__btnPlayIcon' />
            Play
          </button>
          <button className='banner__btnInfo'>
            <IoMdInformationCircleOutline className='banner__btnInfoIcon' />
            More Info
          </button>
        </div>
      </div>
      <div className='banner--fadeBottom'></div>
    </header>
  );
};

export default Banner;
