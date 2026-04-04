import reactRouterDom from "react-router-dom";
import Buscador from "../../components/Buscador/Buscador";
import Movies from "../../components/Movies/Movies";
function Peliculas() {
    return(
        <> 
            <Buscador/>
            <Movies/>
        </>
      )
}
export default Peliculas