import React from 'react';
import Twitter from './twitter.png';
import Instagram from './instagram.png';

import './style.css';



//function component
const Footer = props => {
    return(
        <footer>
            <div className="social-media">
                <p>Síguenos en las redes sociales</p>
                <div className="icons">
                    <a href="https://twitter.com/explore">
                        <img src={Twitter} />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={Instagram} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;