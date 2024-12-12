//Componente in cui creare un contesto globale dove verranno gestite le funzioni da passare a tutti i componenti 
//wrappati al suo interno

import React, { createContext, useState } from 'react';
import axios from 'axios';
import { BASE_URI_MOVIE } from '../BaseUrl';
import { BASE_URI_TV } from '../BaseUrl';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {

    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    // Funzione per recuperare i film e racchiuderli in un array da poter mappare

    function fetchMovies() {
        if (searchQuery) {
            axios.get(`${BASE_URI_MOVIE}&query=${searchQuery}`)
                .then(res => {
                    setMovies(res.data.results);
                });
        }
    }

    // Funzione per recuperare le serie TV e racchiuderle in un array da poter mappare anch'esso

    function fetchTvShows() {
        if (searchQuery) {
            axios.get(`${BASE_URI_TV}&query=${searchQuery}`)
                .then(res => {
                    setTvShows(res.data.results);
                });
        }
    }

    // Funzione per recuperare l'inserimento dell'utente nell'input text

    function handleSearchChange(e) {
        setSearchQuery(e.target.value);
    }

    // Funzione per gestire il submit sul bottone del form e fetchare sia i film che le serie

    function handleSearchSubmit(e) {
        e.preventDefault();
        fetchMovies();
        fetchTvShows();
    }

    // Da importare in app.jsx per wrappare i componenti

    return (
        <GlobalContext.Provider value={{ movies, tvShows, searchQuery, handleSearchChange, handleSearchSubmit, }}>
            {children}
        </GlobalContext.Provider>
    );
};