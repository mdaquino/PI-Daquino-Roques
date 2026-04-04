import React, {Component} from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
class CardSAT extends Component{
    constructor(props){
        super(props)
        this.state={
          data:""
        }
    }




 
  render(){
    return(
         <article className="single-card-on-air mb-3">
                <img src="https://image.tmdb.org/t/p/w500/pv5WNnLUo7mpT8k901Lo8UovrqI.jpg" className="card-img-top"
                    alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">Raw</h5>
                    <p className="card-text">A regularly scheduled, live, year-round program featuring some of the biggest
                        WWE Superstars.</p>
                    <a href="serie.html" className="btn btn-primary">Ver más</a>
                    <a href="serie.html" className="btn alert-primary">🩶</a>
                </div>
            </article>
    )
  } 
}

export default CardSAT