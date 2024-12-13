//Prendere i due array creati nel contesto globale per mapparli e creare le card separatamente dei film e delle serie

import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import Card from './Card';

export default function Main() {
    const { moviesAndShows } = useContext(GlobalContext);


    const movies = moviesAndShows.filter(item => item.type === 'movie');
    const tvShows = moviesAndShows.filter(item => item.type === 'tv');

    return (
        <main>
            {movies.length > 0 && (
                <section className='main'>
                    <h2>Film</h2>
                    <div className="cards-container">
                        {movies.map((movie) => (
                            <Card key={movie.id} item={movie} />
                        ))}
                    </div>
                </section>
            )}

            <div className='border'></div>

            {tvShows.length > 0 && (
                <section className='main'>
                    <h2>Serie TV</h2>
                    <div className="cards-container">
                        {tvShows.map((tvShow) => (
                            <Card key={tvShow.id} item={tvShow} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}