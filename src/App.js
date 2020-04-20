import React, {Fragment, Component} from 'react';
import Header from './components/Header';
import Nosotros from './components/Nosotros';
import Destinos from './components/Destinos';

import Contacto from './components/Contacto';

import Footer from './components/Footer';





class App extends Component {
  render(){
    return(
      <div>
        <Header />

        <Nosotros />

        <Destinos />

        <Contacto />

        <Footer />
      </div>
    );
  }
}

export default App;
