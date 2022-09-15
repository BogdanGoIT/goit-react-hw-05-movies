import { Box } from "components/Box";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import moviesApi from '../services/movies-api';


export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();

    useEffect(() => {
        moviesApi.fetchMovies(`https://api.themoviedb.org/3/movie/${movieId}?`).then(setMovie)
    }, [movieId])


    if (!movie) {
        return null
    }

    console.log(movie)
    const { backdrop_path, original_title, popularity, overview, genres } = movie;

    // console.log(location.state.from);
    const backLinkHref = location.state?.from ?? '/movies';
    
    return (
        
        <div>
            {/* MovieDetails Now showing product with id - {movieId} */}
            <h3><Link to={backLinkHref}>Go back</Link></h3>
        <Box display="flex" as="article">
            
            <Box maxWidth="40%" >
                    {<img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />}
            </Box>
            <Box maxWidth="60%" >
                    <h3>{original_title}</h3>
                    <p>User score: {popularity}%</p>
                    <h4>Overview</h4>
                    <p>{overview}</p>
                    <h5>Genres</h5>
                    <Box as="ul" display="flex">
                        {genres.map(({id, name}) => <Box as="li" mr="10px" key={id}> {name} </Box>)}
                    </Box>
            </Box>
        </Box>
            <Box as="ul" p="10px" >
                <li>
                <Link to="cast">Cast</Link>
                </li>
                <li>
                <Link to="reviews">Reviews</Link>
                </li>
            </Box>
            <Outlet />
        </div>
    );
}