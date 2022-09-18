const API_KEY = `1b50ba0e0b99203af5e26bdcee6d2298`;
const baseURL = `https://api.themoviedb.org/3`;

function fetchMovies(query){
    return (
        fetch(`${baseURL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error(`Не верный ${API_KEY}`))
        })
    )
}

function fetchTrending(){
    return (
        fetch(`${baseURL}/trending/all/day?api_key=${API_KEY}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error(`Не верный ${API_KEY}`))
        })
    )
}

function fetchMovieDetalis(movieId) {

        return (
        fetch(`${baseURL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error(`Не верный ${API_KEY}`))
        })
    )

}

function fetchCast(movieId) {

        return (
        fetch(`${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error(`Не верный ${API_KEY}`))
        })
    )

}

function fetchReviews(movieId) {

        return (
        fetch(`${baseURL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error(`Не верный ${API_KEY}`))
        })
    )

}

const api = {
    fetchMovies,
    fetchTrending,
    fetchMovieDetalis,
    fetchCast,
    fetchReviews,
};

export default api