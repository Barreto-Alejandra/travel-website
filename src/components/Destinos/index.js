import React from 'react';
import Brasil from './rio-janeiro.png';
import Cataratas from './cataratas.png';
import Argentina from './argentina.png';
import './style.css';

//class component 
class Destinos extends React.Component {
    render(){
        return(
            <section id="destinos" className="destinos">
                <h1 className="title">Destinos</h1>

                <div className="destino-left">
                    <div className="img-left">
                        <img src={Brasil} />
                    </div>

                    <div className="description-right">
                        <h2 className="subtitle">
                            Rio de Janeiro
                        </h2>
                    
                        <p className="description">
                            És un fet establert de forma evident que un lector es distraurà amb el contingut llegible d'una pàgina quan miri a la seva composició.  Fa servir un diccionari d'unes 200 paraules llatines, combinades amb un grapat de models de frases per generar un Lorem Ipsum que sembli raonable.
                        </p>
                    </div>
                </div>


                <div className="destino-right">
                    <div className="description-left">
                        <h2 className="subtitle">
                            Cataratas del Iguazú
                        </h2>
                    
                        <p className="description">
                            És un fet establert de forma evident que un lector es distraurà amb el contingut llegible d'una pàgina quan miri a la seva composició.  Fa servir un diccionari d'unes 200 paraules llatines, combinades amb un grapat de models de frases per generar un Lorem Ipsum que sembli raonable.
                        </p>
                    </div>

                    <div className="img-right">
                        <img src={Cataratas} />
                    </div>
                </div>




                <div className="destino-left">
                    <div className="img-left">
                        <img src={Argentina} />
                    </div>

                    <div className="description-right">
                        <h2 className="subtitle">
                            Argentina
                        </h2>
                    
                        <p className="description">
                            És un fet establert de forma evident que un lector es distraurà amb el contingut llegible d'una pàgina quan miri a la seva composició.  Fa servir un diccionari d'unes 200 paraules llatines, combinades amb un grapat de models de frases per generar un Lorem Ipsum que sembli raonable.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Destinos;