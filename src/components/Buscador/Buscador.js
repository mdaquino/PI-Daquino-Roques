import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class Buscador extends Component{
    constructor(props){
        super(props)
        this.state={
          valor: " "
        }

    }

    evitarEnvio(evento){
        evento.preventDefault();
        this.props.history.push("/SearchResults/" + this.state.valor)
    }

    cambioDelInput(evento){
        this.setState({valor: evento.target.value});
        console.log(evento.target.value);
        
    }
    render(){
    return (
        <>
            <form className="search-form" onSubmit={(evento)=>this.evitarEnvio(evento)}>
                <input type="text" className="" name="searchData" onChange={(evento)=>this.cambioDelInput(evento)} value={this.state.valor} placeholder="Buscar..."/>
                <button type="submit" className="btn btn-success btn-sm">Buscar</button>
            </form>
        </>
    )
}
}
 export default withRouter (Buscador)
