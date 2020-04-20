import React from 'react';
import Fondo from './fondo2.png';
import './style.css';

//class component
class Nosotros extends React.Component {
    render() {
        return(
            <section className="nosotros">
                <div className="fondo">
                    <img src={Fondo}/>
                </div>

                <div id="about" className="container">
                    <h1 className="title">Sobre Nosotros</h1>
                    <p className="description">Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta. Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500, quan un impressor desconegut va fer servir una galerada de text i la va mesclar per crear un llibre de mostres tipogràfiques. No només ha sobreviscut cinc segles, sinó que ha fet el salt cap a la creació de tipus de lletra electrònics, romanent essencialment sense canvis.</p>
                </div>

            </section>
        );
    }
}

export default Nosotros;