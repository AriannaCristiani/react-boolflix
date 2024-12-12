//La card dovrà mostrare gli elementi in base al tipo (film o serie) che gli verrà passato dal main

import React from 'react';


const flagMap = {
    it: '/images/italia.png',
    en: '/images/regno-unito.png',
    fr: '/images/francia.png',
    de: '/images/germania.png',
    es: '/images/spagna.png',
    jp: '/images/giappone.png',
    zh: '/images/cina.png',
    ru: '/images/russia.png',
};


export default function Card({ item, type }) {
    return (
        <section className="card">
            {type === 'movie' ? (
                <>
                    <h3>{item.title}</h3>
                    <p>Titolo originale del film: {item.original_title}</p>
                    <p>Lingua: {item.original_language}</p>
                    <p>Voto: {item.vote_average}</p>
                </>
            ) : (
                <>
                    <h3>{item.name}</h3>
                    <p>Nome originale della serie: {item.original_name}</p>
                    <p>Lingua: {item.original_language}</p>
                    <p>Voto: {item.vote_average}</p>
                </>
            )}
        </section>
    );
}