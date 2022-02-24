import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <ul className='header-flex-row'>

                <li className='mx-2'>
                    <Link to="/Home">Home</Link>
                </li>
                <li className='mx-2'>
                    <a href="/">Projects</a>
                </li>
                <li className='mx-2'>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </header>
    );
}

export default Nav;