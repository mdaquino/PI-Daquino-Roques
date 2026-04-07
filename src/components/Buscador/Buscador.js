import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class Buscador extends Component{
    constructor(props){
        super(props)
        this.state={
          valor: "",
          tipo:""
        }

    }

    evitarEnvio(evento){
        
        if(this.state.valor.length != 0 && this.state.tipo.length!=0){
            evento.preventDefault();
            this.props.history.push("/SearchResults/"+ this.state.tipo+"/"+ this.state.valor)
        } else{
            evento.preventDefault()
        }
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
                <div>
                    <input onChange={(e) => this.setState({tipo: e.target.value})} type="radio" id="p" name="PS" value="movie"></input>
                    <label for="p">Peliculas</label>
                    <input onChange={(e) => this.setState({tipo: e.target.value})} type="radio" id="s" name="PS" value="tv"></input>
                    <label for="s">Series</label>
                </div>
            </form>
        </>
    )
}
}
 export default withRouter (Buscador)
