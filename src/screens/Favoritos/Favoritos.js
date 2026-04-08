import React, { Component } from "react";
import Buscador from "../../components/Buscador/Buscador";
import CardMovie from "../../components/CardMovie/CardMovie";
import CardSerie from "../../components/CardSeries/CardSeries";
class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritosP: [],
            favoritosS: [],
            cargando: true
        }
    }
    componentDidMount() {
        let storageP = localStorage.getItem("favoritosP")
        let favoritosStorageP = JSON.parse(storageP)
        let pelisRecuperadas = []

        if (favoritosStorageP === null || favoritosStorageP.length === 0) {
            this.setState({
                cargando: false,
                favoritosP: []
            })
        } else {
            favoritosStorageP.map(id => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bb857f4016bcff3ee72ee89cb409417f`)
                    .then(response => response.json())
                    .then(data => {
                        pelisRecuperadas.push(data)

                        this.setState({
                            favoritosP: pelisRecuperadas,
                            cargando: false
                        })
                    })
                    .catch(error => console.log(error))

            })

        }

        let storageS = localStorage.getItem("favoritosS")
        let favoritosStorageS = JSON.parse(storageS)
        let seriesRecuperadas = []

        if (favoritosStorageS === null || favoritosStorageS.length === 0) {
            this.setState({
                cargando: false,
                favoritosS: []
            })
        } else {
            favoritosStorageS.map(id => {
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=bb857f4016bcff3ee72ee89cb409417f`)
                    .then(response => response.json())
                    .then(data => {
                        seriesRecuperadas.push(data)

                        this.setState({
                            favoritosS: seriesRecuperadas,
                            cargando: false
                        })
                    })
                    .catch(error => console.log(error))

            })

        }

    }


    render() {
        return (
            <div>
                <h2>Peliculas Favoritas</h2>
                <section className="seccionFavoritos">
                    {this.state.cargando === true ? (
                        <p>Cargando...</p>
                    ) : this.state.favoritosP.length === 0 ? (
                        <p>No hay peliculas guardadas en favoritos</p>
                    ) : (

                        this.state.favoritosP.map((personaje) =>

                            <CardMovie
                                id={personaje.id}
                                nombre={personaje.title}
                                foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                desc={personaje.overview}
                            />

                        )

                    )}
                </section>
                <h2>Series Favoritas</h2>
                <section className="seccionFavoritos">
                    {this.state.cargando === true ? (
                        <p>Cargando...</p>
                    ) : this.state.favoritosS.length === 0 ? (
                        <p>No hay peliculas guardadas en favoritos</p>
                    ) : (

                        this.state.favoritosS.map((personaje) =>

                            <CardSerie
                                    id = {personaje.id}
                                    nombre={personaje.original_name}
                                    imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                    desc={personaje.overview}
                                />

                        )

                    )}
                </section>
            </div>
        )
    }
}
export default Favoritos