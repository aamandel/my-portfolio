import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className='header-flex-row'>

            <li className='mx-2'>
                <Link to="/">Home</Link>
            </li>
            <li className='mx-2'>
                <Link to="/#About">About</Link>
            </li>
            <li className='mx-2'>
                <Link to="/#Projects">Projects</Link>
            </li>
            <li className='mx-2'>
                <Link to="/Contact">Contact</Link>
            </li>

        </header>
    );
}

export default Nav;