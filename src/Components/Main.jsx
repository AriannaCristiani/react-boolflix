//Prendere i due array creati nel contesto globale per mapparli e creare le card separatamente dei film e delle serie

import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import Card from './Card';

export default function Main() {
    const { movies, tvShows } = useContext(GlobalContext);

    return (
        <main>
            <h2>Risultati dei Film</h2>
            <div className="cards-container">
                {movies.map((movie) => (
                    <Card key={movie.id} item={movie} type="movie" />
                ))}
            </div>

            <hr />

            <h2>Risultati delle Serie TV</h2>
            <div className="cards-container">
                {tvShows.map((tvShow) => (
                    <Card key={tvShow.id} item={tvShow} type="tv" />
                ))}
            </div>
        </main>
    );
}