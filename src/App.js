import React, {Component} from 'react';


import Buscador from './components/Buscador'

import './bootstrap.css';

class App extends Component {

  state = {
    termino: 'Cáfe'
  }


  consultarApi = ()=> {
    const url = `https://pixabay.com/api/?key=536032-cb671dc3c54fa28278f649d70&q=${this.state.termino}`
    
    fetch(url)
      .then(res => res.json())
      .then(res => console.log(res.hits))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    },()=>{
      this.consultarApi()
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
