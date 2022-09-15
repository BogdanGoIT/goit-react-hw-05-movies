import { MoviesPopular } from "components/MoviesPopular/MoviesPopular";
import { SearchBox } from "components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import moviesApi from '../services/movies-api';

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    // const [searchMovie, setSearchMovie] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "";

    console.log(query);


    useEffect(() => {
        if (!query) {
            return;
        }

        moviesApi.fetchMovies(`https://api.themoviedb.org/3/search/movie?api_key=1b50ba0e0b99203af5e26bdcee6d2298&query=${query}&language=en-US&page=1&include_adult=false`).then(setMovies)

    }, [query])

    if (!movies) {
        return null;
    }

    const searchName = (name) => {
        setSearchParams(name !== "" ? { query: name } : {});

        // setSearchMovie(name);
    }

    return (
        <div>
            <SearchBox searchName={searchName} />
            {movies.results && <MoviesPopular items={movies.results} /> }
        </div>
    )
    
}