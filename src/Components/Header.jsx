import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

export default function Header() {
    const { searchQuery, handleSearchChange, handleSearchSubmit } = useContext(GlobalContext);

    return (
        <header>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Cosa vuoi vedere?"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button type="submit">Cerca</button>
            </form>
        </header>
    );
}