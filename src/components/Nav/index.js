import React from 'react';

const Nav = () => {
    return (
        <header>
            <ul className='header-flex-row'>

                <li className='mx-2'>
                    <a href="/">Home</a>
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