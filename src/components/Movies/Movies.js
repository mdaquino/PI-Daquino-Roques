import CardMovie from "../CardMovie/CardMovie"
import CardNMP from "../CardMNP/CardMNP"
import { Component } from "react"
class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personajes: []
        }
    }



    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    personajes: data.results
                })
            })
            .catch(error => console.log(error))

        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    personajes: data.results
                })
            })
            .catch(error => console.log(error))
    }



    render() {
        console.log(this.state);
        return (
            <>
                <h2 className="alert alert-primary">Popular movies this week</h2>
                <section className="row cards" id="movies">
                    {
                        this.state.personajes.length > 0 ? (
                            this.state.personajes.map((personaje) => (
                                <CardMovie 
                                   nombre={personaje.title}
                                    foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                    desc={personaje.overview}
                                />
                            ))
                        ) : (
                            <p>Cargando... </p>
                        )
                    } 
                </section>
                <h2 className="alert alert-primary">Movies now playing</h2>
                <section className="row cards" id="now-playing">
                    {
                        this.state.personajes.length > 0 ? (
                            this.state.personajes.map((personaje) => (
                                <CardNMP
                                    nombre={personaje.title}
                                    foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                    desc={personaje.overview}
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
export default Movies
