import React from 'react';
import './style.css';

//class component
class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <nav className="nav">
                    <a href="#">Home</a>
                    <a href="#about">Nosotros</a>
                    <a href="#destinos">Destinos</a>
                    {/* <a href="#galery">Galeria de fotos</a> */}
                    <a href="#contact">Contacto</a>
                </nav>
            </header>
        );
    }
}
export default Header;
