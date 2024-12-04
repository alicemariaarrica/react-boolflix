import { createContext, useContext, useEffect, useState } from 'react';


const GlobalContext = createContext();

function GlobalContextProvider({ children }) {


    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    const [searchText, setSearchText] = useState('');

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;


    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;
    const base_shows_api_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=`;


    const fetchTrending = () => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);
                setMovies(results);
            });

        fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);
                setShows(results);
            });
    };


    useEffect(() => {
        fetchTrending();
    }, []);


    function HandleSearchTextSubmit(e) {
        e.preventDefault();

        const movieSearchUrl = `${base_movies_api_url}${searchText}`;
        const showSearchUrl = `${base_shows_api_url}${searchText}`;


        fetch(movieSearchUrl)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log('Movies:', results);
                setMovies(results);
            });

        fetch(showSearchUrl)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log('Shows:', results);
                setShows(results);
            });
    }

    const values = {
        movies,
        setMovies,
        shows,
        setShows,
        searchText,
        setSearchText,
        HandleSearchTextSubmit
    };

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    );
}


function useGlobalContext() {
    return useContext(GlobalContext);
}

export { GlobalContextProvider, useGlobalContext };
