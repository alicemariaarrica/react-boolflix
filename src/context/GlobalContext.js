import { createContext, useContext, useEffect, useState } from 'react';
const GlobalContext = createContext();

function GlobalContextProvider({ children }) {

    const [movies, setMovies] = useState([])
    const [shows, setShows] = useState([])

    const [serchText, setSearchText] = useState('')


    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${serchText}`;
    const base_shows_api_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${serchText}`;





    useEffect(() => {
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

    }, [])




    function HandleSearchTextSubmit(e) {
        e.preventDefault();
        console.log(base_movies_api_url);
        console.log(base_shows_api_url);



        fetch(base_shows_api_url)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);

                setShows(results);
            });




        fetch(base_movies_api_url)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);

                setMovies(results);
            });



    }




    const values = {
        movies,
        setMovies,
        shows,
        setShows,
        serchText,
        setSearchText,
        base_movies_api_url,
        HandleSearchTextSubmit
    }



    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )

}



function useGlobalContext() {
    return useContext(GlobalContext);
}



export { GlobalContextProvider, useGlobalContext };

