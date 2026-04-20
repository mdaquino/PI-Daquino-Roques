import { Component } from "react";
import Buscador from "../../components/Buscador/Buscador";
import CardMovie from "../../components/CardMovie/CardMovie"


class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personajes: [],
        }
    }
    
    componentDidMount() {
        const nombre = this.props.match.params.nombre
        const tipo= this.props.match.params.tipo
        fetch(`https://api.themoviedb.org/3/search/${tipo}?query=${nombre}&api_key=bb857f4016bcff3ee72ee89cb409417f`)
            .then(respone => respone.json())
            .then(data => this.setState({ personajes: data.results }))
            .catch(error => console.log(error))
    }
     componentDidUpdate() {
        const nombre = this.props.match.params.nombre
        const tipo= this.props.match.params.tipo
        if(this.props.match.params.nombre !== nombre || this.props.match.params.tipo !== tipo)
        fetch(`https://api.themoviedb.org/3/search/${tipo}?query=${nombre}&api_key=bb857f4016bcff3ee72ee89cb409417f`)
            .then(respone => respone.json())
            .then(data => this.setState({ personajes: data.results }))
            .catch(error => console.log(error))
    }
    





    render() {
        console.log(this.state);
        console.log(this.props);
       
        return (
            <>
            <Buscador/>
            <section className="row cards" id="movies">
                {
                    this.state.personajes.length > 0 ? (    
                        this.state.personajes.map((personaje) => (
                            <CardMovie
                                id={personaje.id}
                                nombre={personaje.title}
                                foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                desc={personaje.overview}
                                tipo={this.props.match.params.tipo}
                            />
                        ))
                    ) : (
                        <p>Cargando... </p>
                    )
                }
            </section>
            </>
        )
    }
}


export default SearchResults;