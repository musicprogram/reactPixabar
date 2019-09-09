import React,{Component} from 'react';

class Buscador extends Component{

	busquedaRef = React.createRef();

	obtenerDatos =(e) =>{
		e.preventDefault();
		// console.log(this.busquedaRef.current.value);
		let busqueda = this.busquedaRef.current.value;
		this.props.datosBusqueda(busqueda);
	}

	render(){
		return (
			<form onSubmit={this.obtenerDatos}>
				<div className="row">
					<div className="form-group col-md-8">
						<input 
							ref={this.busquedaRef}
							type="text" 
							placeholder="Busca imágen" 
							className="form-control form-group-lg"
						/>
					</div>
					<div className="form-group col-md-4">
						<input 
							type="submit" 
							className="btn btn-lg btn-danger btn-block"
							value="Buscar"
						/>
					</div>
				</div>
			</form>
		)
	}
}

export default Buscador;