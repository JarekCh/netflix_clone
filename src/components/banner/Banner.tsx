import './Banner.css';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../features/api/Requests';
import { Movie } from '../../utils/shared/types';

const Banner = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  console.log("🚀 ~ file: Banner.tsx:11 ~ Banner ~ movie:", movie)

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(request.data.backdrop_path);
      return request;
    }

    fetchData();
  }, []);


  const truncate = (string: string, n: number) => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contens'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className='banner__description'>
          {truncate(movie?.overview || '', 150)}
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
