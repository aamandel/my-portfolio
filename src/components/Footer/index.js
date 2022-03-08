import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <svg id="Layer_1" viewBox="0 0 249.61 118.9" preserveAspectRatio='none' className='footer-svg'>
                <polygon className="cls-1" points="0 118.9 17.3 28.37 64.21 0 217.02 28.65 248.2 57.58 249.61 118.9 0 118.9" />
            </svg>
            <ul>
                <li className='mx-2'>
                    <a href='https://github.com/aamandel' target="_blank">
                        <i className='fa fa-github footer-icon'></i>
                    </a>
                </li>
                <li className='mx-2'>
                    <a href="mailto: aaronmandel12@gmail.com">
                        <i className='fa fa-envelope footer-icon'></i>
                    </a>
                </li>
                <li className='mx-2'>
                    <a href="https://www.linkedin.com/in/aamandel/" target="_blank">
                        <i className='fa fa-linkedin footer-icon'></i>
                    </a>
                </li>
            </ul>

        </footer>
    );
}

export default Footer;