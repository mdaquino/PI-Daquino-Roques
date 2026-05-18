import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from 'universal-cookie';
import { useEffect, useState } from "react"

const cookies = new Cookies();

function FormLogin (props){
 
    const [email, setEmail]= useState("")
     const [password, setPassword]= useState("")
    function iniciarSesion(e){
        e.preventDefault()
        let usuarioaVerificar= {email: email, password: password}
        const userstorege= localStorage.getItem("users")
        if(userstorege=== null){
            alert("Las credenciales ingresadas son invalidas")
        }
        else{
            let usersParseado= JSON.parse(userstorege)
            console.log(usersParseado);
            
            let usersFiltrado= usersParseado.filter((usuario)=> usuario.email == email)
            console.log(usersFiltrado);
            
            if(usersFiltrado.length === 0){
                alert("El usuario ingresado no existe")
            } else{
                
                let usersFiltrado= usersParseado.filter((usuario)=> usuario.contrasena == password)
                if(usersFiltrado.length=== 0){
                    alert("las credenciales ingresadas son inválidas")
                }else{
                    let emailUsu= email
                    let usuarioEnSesion= JSON.stringify({sesionActiva: true})
                    localStorage.setItem("sesion", usuarioEnSesion)
                    cookies.set('auth-user', emailUsu )
                    this.props.history.push("/")
                    
                }

            }
        }
        
    }

   

    function cambioInput(evento) {
        console.log("me activo");
        
        if (evento.target.id == 'password') {
            this.setState({ password: evento.target.value })
        }
       
        if (evento.target.id == 'email') {
            this.setState({ email: evento.target.value })
        }
        console.log(evento.target.value)
    }



        return (
            <>
            <h2 className="alert alert-primary">Iniciar sesión</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={(e) => this.iniciarSesion(e)}> 
                        <div className="form-group">
                         <label for="email">Email</label>
                         <input onChange={(evento) => this.cambioInput(evento)} type="email" className="form-control" id="email" placeholder="Ingresá tu email"/>
                        </div>
                        <div className="form-group">
                            <label for="password">Contraseña</label>
                            <input onChange={(evento) => this.cambioInput(evento)} type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña"/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                    </form>
                    <p className="mt-3 text-center">¿No tenés cuenta? <Link to="/Registro">Registrarse</Link></p>
                </div>
            </div>
         </>
            
            
        )
    }


export default withRouter(FormLogin); 