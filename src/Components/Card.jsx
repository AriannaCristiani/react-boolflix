//La card dovrà mostrare gli elementi in base al tipo (film o serie) che gli verrà passato dal main

import React from 'react';
import { BASE_URI_IMG } from '../BaseUrl';

const flagMap = {
    it: '/images/italia.png',
    en: '/images/regno-unito.png',
    fr: '/images/francia.png',
    de: '/images/germania.png',
    es: '/images/spagna.png',
    ja: '/images/giappone.png',
    zh: '/images/cina.png',
    ru: '/images/russia.png',
};

export default function Card({ item }) {
    const { title, original_title, vote_average, original_language, poster_path } = item;

    const flagSrc = flagMap[original_language];

    return (
        <section className="card-img">
            <div>
                <img
                    src={poster_path ? `${BASE_URI_IMG}/${poster_path}` : '/images/placeholder-image.jpg'}
                    alt=""
                />
            </div>
            <div className="card">
                <h3>{title}</h3>
                <p>Titolo originale: {original_title}</p>
                <p>Lingua: {original_language}
                    <img src={flagSrc} alt={original_language} style={{ width: 30 }} />
                </p>
                <p>Voto: {vote_average}</p>
            </div>
        </section>
    );
}