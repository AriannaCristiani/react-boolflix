import React, { createContext, useState } from 'react';
import axios from 'axios';
import { BASE_URI_MOVIE } from '../BaseUrl';
import { BASE_URI_TV } from '../BaseUrl';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Funzione per recuperare i dati dei film
    function fetchMovies() {
        if (searchQuery) {
            axios.get(`${BASE_URI_MOVIE}&query=${searchQuery}`)
                .then(res => {
                    setMovies(res.data.results);
                });
        }
    }

    // Funzione per recuperare i dati delle serie TV
    function fetchTvShows() {
        if (searchQuery) {
            axios.get(`${BASE_URI_TV}&query=${searchQuery}`)
                .then(res => {
                    setTvShows(res.data.results);
                });
        }
    }

    // Funzione per recuperare l'inserimento dell'utente dall'input
    function handleSearchChange(e) {
        setSearchQuery(e.target.value);
    }

    // Funzione per gestire il submit sul bottone del form
    function handleSearchSubmit(e) {
        e.preventDefault();
        fetchMovies();
        fetchTvShows();
    }

    return (
        <GlobalContext.Provider value={{ movies, tvShows, searchQuery, handleSearchChange, handleSearchSubmit, }}>
            {children}
        </GlobalContext.Provider>
    );
}