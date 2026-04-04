import CardSerie from "../CardSeries/CardSeries"
import CardSAT from "../CardSAT/CardSAT"
function SeriesC(){

    return (
        <>
                 <h2 className="alert alert-warning">Popular TV shows this week</h2>
        <section className="row cards" id="tv-show">
            <CardSerie/>
            <CardSerie/>
            <CardSerie/>
            <CardSerie/>
            <CardSerie/>
        </section>
        <h2 className="alert alert-warning">TV shows airing today</h2>
        <section className="row cards" id="on-air-today">
            <CardSAT/>
            <CardSAT/>
            <CardSAT/>
            <CardSAT/>
            <CardSAT/>
            <CardSAT/>



        </section>
        </>

    )
}
export default SeriesC
