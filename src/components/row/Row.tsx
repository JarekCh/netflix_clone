import React, { useEffect, useState } from 'react';
import './Row.css';
import { Movie } from '../../utils/shared/types';
import axios from '../../utils/axios';


type Props = {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
    const [movies, setMovies] = useState<Movie[] | []>([]);

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
        </div>
    )
}

export default Row