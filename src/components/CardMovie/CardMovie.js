import React, {Component} from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
class CardMovie extends Component{
    constructor(props){
        super(props)
        this.state={
          data:""
        }
    }

  render(){
    return(
      <article className="single-card-movie">
                <img src="https://image.tmdb.org/t/p/w500/tzrJulItjttxzoX0t3B2My46TS7.jpg" className="card-img-top"
                    alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">The Thursday Murder Club</h5>
                    <p className="card-text">A group of senior sleuths passionate about solving cold cases get plunged into
                        a real-life murder mystery in this comic crime caper.</p>
                    <a href="movie.html" className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
    )
  } 
}

export default CardMovie