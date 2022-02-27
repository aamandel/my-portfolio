import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className='header-flex-row'>

            <li className='mx-2'>
                <Link to="/">Home</Link>
            </li>
            <li className='mx-2'>
                <a href="/">Projects</a>
            </li>
            <li className='mx-2'>
                <a href="/">Contact</a>
            </li>

        </header>
    );
}

export default Nav;