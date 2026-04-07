import React, {Component} from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
class CardMovie extends Component{
    constructor(props){
        super(props)
        this.state={
          data:"",
          clase: "Oculto",
          textoBoton: "Ver menos"
        }
    }
    ocultar(){
        if (this.state.clase === "oculto") {
            this.setState({
                clase: "",
                textoBoton: "Ver menos"
            })
        } else {
            this.setState({
                clase: "oculto",
                textoBoton:"Ver mas"
            })
        }
    }

  render(){
    return(
      <article className="single-card-movie">
                <img src={this.props.foto} className="card-img-top"
                    alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.nombre}</h5>
                    
                    <section className={this.state.clase}>
  
                      <p className="card-text">{this.props.desc}</p>
                    </section> 
                    <button className='more' onClick={()=>this.ocultar()}>
                      {this.state.textoBoton}
                    </button>
                   
                    <Link to={"/detalleP/" + this.props.id}><button href="movie.html" className="btn btn-primary">Ver detalle</button></Link>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
    )
  } 
}

export default CardMovie