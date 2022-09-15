import { Box } from "components/Box";
import { useState, useEffect } from "react";
import moviesApi from '../services/movies-api';
import { MoviesPopular } from "components/MoviesPopular/MoviesPopular";


export const Home = () => {
    const [moviesPopular, setMoviesPopular] = useState('');

    useEffect(() => {
        moviesApi.fetchMovies('https://api.themoviedb.org/3/trending/all/day?')
            .then(setMoviesPopular)
    }, []);


    return (
        <Box display="flex" as="main">
            {moviesPopular && <MoviesPopular items={moviesPopular.results} />}
        </Box>
        
    )
}