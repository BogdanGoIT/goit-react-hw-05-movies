const API_KEY = `api_key=1b50ba0e0b99203af5e26bdcee6d2298`;

function fetchMovies(url){
    return (
        fetch(`${url}${API_KEY}`)
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
};

export default api