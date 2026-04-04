import React, {Component} from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
class CardNMP extends Component{
    constructor(props){
        super(props)
        this.state={
          data:""
        }
    }

  render(){
    return(
      <article className="single-card-playing">
                <img src="https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg" className="card-img-top"
                    alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">I Know What You Did Last Summer</h5>
                    <p className="card-text">When five friends inadvertently cause a deadly car accident, they cover up
                        their involvement and make a pact to keep it a secret rather than face the consequences. A year
                        later, their past comes back to haunt them and they're forced to confront a horrifying truth:
                        someone knows what they did last summer…and is hell-bent on revenge.</p>
                    <a href="movie.html" className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">♥️</a>
                </div>
            </article>
    )
  } 
}

export default CardNMP