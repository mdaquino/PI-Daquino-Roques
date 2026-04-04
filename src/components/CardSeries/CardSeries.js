import React, {Component} from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
class CardSerie extends Component{
    constructor(props){
        super(props)
        this.state={
          data:""
        }
    }

  render(){
    return(
        <article className="single-card-tv">
                <img src="https://image.tmdb.org/t/p/w500/3m1UaMLgmpj6krNaQwTpftYFsnz.jpg" className="card-img-top"
                    alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">A Record of a Mortal's Journey to Immortality</h5>
                    <p className="card-text">A poor and ordinary boy from a village joins a minor sect in Jiang Hu and
                        becomes an Unofficial Disciple by chance. How will Han Li, a commoner by birth, establish a
                        foothold for himself in his sect? With his mediocre aptitude, he must successfully traverse the
                        treacherous path of cultivation and avoid the notice of those who may do him harm. This is a
                        story of an ordinary mortal who, against all odds, clashes with devilish demons and ancient
                        celestials in order to find his own path towards immortality.</p>
                    <a href="serie.html" className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
    )
  }
}

export default CardSerie
