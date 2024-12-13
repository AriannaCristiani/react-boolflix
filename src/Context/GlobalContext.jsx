import React, { createContext, useState } from 'react';
import axios from 'axios';
import { BASE_URI_MOVIE } from '../BaseUrl';
import { BASE_URI_TV } from '../BaseUrl';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [moviesAndShows, setMoviesAndShows] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    function fetchMoviesAndShows() {
        axios.get(`${BASE_URI_MOVIE}`, {
            params: {
                query: searchQuery
            }
        }).then(res => {
            //console.log(res.data); 
            const movies = res.data.results.map(movie => ({
                ...movie,
                title: movie.title,
                original_title: movie.original_title,
                type: 'movie'
            }));
            setMoviesAndShows(prevState => [...prevState, ...movies]);
        }).catch(err => {
            console.error(err);
            setMoviesAndShows(prevState => [...prevState, ...[]]);
        });


        axios.get(`${BASE_URI_TV}`, {
            params: {
                query: searchQuery
            }
        }).then(res => {
            //console.log(res.data); 
            const mappedSeries = res.data.results.map(tvShow => ({
                ...tvShow,
                title: tvShow.name,
                original_title: tvShow.original_name,
                type: 'tv'
            }));
            setMoviesAndShows(prevState => [...prevState, ...mappedSeries]);
        }).catch(err => {
            console.error(err);
            setMoviesAndShows(prevState => [...prevState, ...[]]);
        });
    }

    function handleSearchChange(e) {
        setSearchQuery(e.target.value);
    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        fetchMoviesAndShows();
    }

    return (
        <GlobalContext.Provider value={{ moviesAndShows, searchQuery, handleSearchChange, handleSearchSubmit }}>
            {children}
        </GlobalContext.Provider>
    );
}