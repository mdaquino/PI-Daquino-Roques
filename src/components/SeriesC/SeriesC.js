import CardSerie from "../CardSeries/CardSeries"
import CardSAT from "../CardSAT/CardSAT"
import { Component } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useState, useEffect } from "react"
function SeriesC(props) {
    const [airing, setAiring] = useState([])
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => setAiring(data.results))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => setPopular(data.results))
            .catch(error => console.log(error))
    }, [])



    return (
        <>
            <h2 className="alert alert-warning">Popular TV shows this week</h2>
            <section className="row cards" id="tv-show">
                {
                    popular.length > 0 ? (
                        popular.slice(0, 5).map((personaje) =>
                            <CardSerie
                                id={personaje.id}
                                nombre={personaje.original_name}
                                imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                desc={personaje.overview}
                            />
                        )
                    ) : (<p>Cargando....</p>)


                }
                <Link to="/Series" className="btn btn-primary">Ver todas</Link>
            </section>
            <h2 className="alert alert-warning">TV shows airing today</h2>
            <section className="row cards" id="on-air-today">
                {
                    airing.length > 0 ? (
                        airing.slice(0, 6).map((personaje) =>
                            <CardSAT
                                id={personaje.id}
                                nombre={personaje.original_name}
                                imagen={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                desc={personaje.overview}
                            />
                        )
                    ) : (<p>Cargando....</p>)


                }
            </section>
            <Link to="/Series" className="btn btn-primary">Ver todas</Link>
        </>

    )
}

export default SeriesC
