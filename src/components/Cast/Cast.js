import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moviesApi from '../../services/movies-api';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    // console.log(movieId);

    useEffect(() => {
        moviesApi.fetchCast(movieId).then(setCast)
    }, [movieId])

    if (!cast) {
        return null;
    }
    
    console.log(cast);

    return (
       
        <div>
            <ul>

                {cast.cast.map(({ character, name, profile_path, id }) => profile_path &&
                    <li key={id}>
                        <img width="100" src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt="" />
                        <p>{name}</p>
                        <p>Character: {character}</p>
                </li>)}

             </ul>
        </div>
    )
}

export default Cast;