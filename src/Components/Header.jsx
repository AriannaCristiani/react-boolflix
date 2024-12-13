import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

export default function Header() {
    const { searchQuery, handleSearchChange, handleSearchSubmit } = useContext(GlobalContext);

    return (
        <header className='header'>
            <div>
                <img className='logo' src="/images/Netflix-logo.png" />
            </div>
            <form onSubmit={handleSearchSubmit} className='form'>
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