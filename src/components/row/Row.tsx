import React, { useEffect, useState } from 'react';
import './Row.css';
import { Movie } from '../../utils/shared/types';
import axios from '../../utils/axios';


type Props = {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

const Row = ({ title, fetchUrl, isLargeRow = false }: Props) => {
    const [movies, setMovies] = useState<Movie[] | null>(null);

    const base_url = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    return (
        <div className='row'>
            <h2>{title}</h2>
            {movies?.map(movie => {
                return <img className={`row_poster ${isLargeRow && 'row__posterLarge'}`}
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name} />
            })}
        </div>
    )
}

export default Row