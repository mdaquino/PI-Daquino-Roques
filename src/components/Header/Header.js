import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import React, { Component } from 'react';

const cookies= new Cookies()
class Header extends Component{
    render(){
        const cookie= cookies.get("auth-user")
        return (
        
        <><h1>UdeSA Movies</h1>
        <nav>
             <ul class="nav nav-tabs my-4">
                <li class="nav-item">
                    <Link to="/" class="nav-link"> Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Peliculas" class="nav-link"> Peliculas</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Series" class="nav-link"> Series</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Favoritos" class="nav-link"> Favoritos</Link>
                </li>
                {!cookie?(
                    <>
                <li class="nav-item ml-auto">
                    <Link to="/LogIn" class="nav-link"> LogIn</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Registro" class="nav-link"> Registro</Link>
                </li>
                </>
                ):(
                    
                  <li class="nav-item ml-auto">
                    <Link to="/MiPerfil" class="nav-link"> Log out</Link>
                </li>
                
                )}
            </ul>
           
        </nav>
        </>
    )
}}
export default Header