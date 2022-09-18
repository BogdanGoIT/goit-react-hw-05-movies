import { Box } from "components/Box";
import { useState, useEffect } from "react";
import moviesApi from '../services/movies-api';
import { Movie } from "components/Movie/Movie";


const Home = () => {
    const [moviesPopular, setMoviesPopular] = useState('');

    useEffect(() => {
        moviesApi.fetchTrending()
            .then(setMoviesPopular)
    }, []);


    return (
        <Box display="flex" as="main">
            {moviesPopular && <Movie items={moviesPopular.results} />}
        </Box>
        
    )
}

export default Home;