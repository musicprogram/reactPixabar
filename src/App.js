import React, {Component} from 'react';


import Buscador from './components/Buscador'

import './bootstrap.css';

class App extends Component {

  state = {
    termino: 'Cáfe'
  }


  datosBusqueda = (termino) => {
    this.setState({
      termino
    })
  }


  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        {this.state.termino}
      </div>
    );
  }
}

export default App;
