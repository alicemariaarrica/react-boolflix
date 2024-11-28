import React, { createContext, useContext, useState } from 'react';


const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 
