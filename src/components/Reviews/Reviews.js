import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moviesApi from '../../services/movies-api';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    console.log(movieId);

    useEffect(() => {
        moviesApi.fetchMovies(`https://api.themoviedb.org/3/movie/${movieId}/reviews?`).then(setReviews)
    }, [movieId]);

    if (!reviews) {
        return null;
    }

    console.log(reviews);

    return (
        <div>
            <ul>
                {reviews && reviews.results.map(({ id, author, content }) =>
                <li key={id}>
                    <h4>{author}</h4> 
                    <p>{content}</p>
                </li>)}

             </ul>
       </div> 
    )
}