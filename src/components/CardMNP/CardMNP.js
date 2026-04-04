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
                <img src={this.props.foto} className="card-img-top" alt=" "/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.nombre}</h5>
                    <p className="card-text">{this.props.desc}</p>
                    <a href="movie.html" className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">♥️</a>
                </div>
            </article>
    )
  } 
}

export default CardNMP