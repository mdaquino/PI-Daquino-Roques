import CardMovie from "../CardMovie/CardMovie"
import CardNMP from "../CardMNP/CardMNP"
function Movies(){
    let peli= ""
    return (
        <>
                    <h2 className="alert alert-primary">Popular movies this week</h2>
        <section className="row cards" id="movies">
            <CardMovie/>
            <CardMovie/>
            <CardMovie/>
            <CardMovie/>
        </section>
        <h2 className="alert alert-primary">Movies now playing</h2>
        <section className="row cards" id="now-playing">
            <CardNMP/>
            <CardNMP/>
            <CardNMP/>
            <CardNMP/>
            <CardNMP/>
            <CardNMP/>
            </section>
        </>

    )
}
export default Movies
