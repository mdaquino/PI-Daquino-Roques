import { Link, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import React, { Component } from 'react';

const cookies = new Cookies()
class Header extends Component {
    render() {
        const cookie = cookies.get("auth-user")
        return (

            <><h1>UdeSA Movies</h1>
                <nav>
                    <ul className="nav nav-tabs my-4">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Peliculas" class="nav-link"> Peliculas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Series" className="nav-link"> Series</Link>
                        </li>

                        {cookie == null ? (
                            <>
                                <li className="nav-item ml-auto">
                                    <Link to="/LogIn" className="nav-link"> LogIn</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Registro" className="nav-link"> Registro</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/Favoritos" className="nav-link"> Favoritos</Link>
                                </li>
                                <li class="nav-item ml-auto">
                                    <Link to="/MiPerfil" className="nav-link"> Log out</Link>
                                </li>
                            </>
                        )}
                    </ul>

                </nav>
            </>
        )
    }
}
export default withRouter(Header)