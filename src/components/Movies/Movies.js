import CardMovie from "../CardMovie/CardMovie"
import CardNMP from "../CardMNP/CardMNP"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react"
function Movies(props) {

    const [nowPlaying, setNowPlaying] = useState([])
    const [popular, setPopular] = useState([])



    useEffect(() => { 
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => setNowPlaying(data.results))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => { 
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bb857f4016bcff3ee72ee89cb409417f")
            .then(response => response.json())
            .then(data => setPopular(data.results))
            .catch(error => console.log(error))
    }, [])

   return (
        <>
            <h2 className="alert alert-primary">Popular movies this week</h2>
            <section className="row cards" id="movies">
                {
                    popular.length > 0 ? (
                        popular.slice(0, 4).map((personaje) => (
                            <CardMovie
                                id={personaje.id}
                                nombre={personaje.title}
                                foto={"https://image.tmdb.org/t/p/w342" + personaje.poster_path}
                                desc={personaje.overview}
                            />
                        ))
                    ) : (
                        <p>Cargando..</p>
                    )
                }
                <Link to="/Peliculas" className="btn btn-primary">Ver todas</Link>
            </section>
            <h2 className="alert alert-primary">Movies now playing</h2>
            <section className="row cards" id="now-playing">
                {
                    nowPlaying.length > 0 ? (
                        nowPlaying.slice(0, 6).map((personaje) => (
                            <CardNMP
                                id={personaje.id}
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
            <Link to="/Peliculas" className="btn btn-primary">Ver todas</Link>
        </>

    )
}

export default Movies
