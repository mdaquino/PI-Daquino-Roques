import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './screens/Home/Home'
import Favoritos from './screens/Favoritos/Favoritos';
import LogIn from './screens/LogIn/LogIn';
import Peliculas from './screens/Peliculas/Peliculas'
import Series from './screens/Series/Series'
import Registro from './screens/Registro/Registro';
function App() {
  return (
    <div className='Container'>
      <Header Home="Home" Peliculas="Peliculas" Series="Series" Favoritos="Favoritos" LogIn="Log In" Registro="Registro"/>
      <Switch>
        
        <Route path="/" exact={true} component={Home}/>
        <Route path="/Peliculas" component={Peliculas}/>

        <Route path="/Series" component={Series}/>
        <Route path="/Favoritos" component={Favoritos}/>
        
        <Route path="/LogIn" component={LogIn}/>
        <Route path="/Registro" component={Registro}/>
        

      </Switch>
      <footer className="alert alert-primary mt-4 text-center">
            <p className="mb-0"> Vito D'Aquino | Agustin Roques </p>
        </footer>
    </div>
  );
}

export default App;
