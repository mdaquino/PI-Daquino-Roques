import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react"

function FormRegister (props){
   
    const [username, setUsername]= useState("")
    const [email, setEmail]= useState("")
    const [contrasena, setContrasena]= useState("")
    const [error, setError]= useState("")

    function evitarEnvio(evento) {
        evento.preventDefault()

        let usuarioACrear = { username: username, email: email, contrasena: contrasena }

        if (username.length <= 3 || username.length > 7) {
            alert("El nombre de usuario debe tener entre 3 y 7 caracteres");
            return
        }

        if (!email.includes("@")) {
            alert("El campo de email debe incluir @")
            return
        }

        if (contrasena.length <= 5 || contrasena.length >= 12) {
            alert("La contreseña debe tener entre 5 y 12 caracteres")
            return
        }


        console.log(usuarioACrear)

        let usersStorage = localStorage.getItem("users")

        if (usersStorage !== null) {
            let usersParseado = JSON.parse(usersStorage)
            let usersFiltardo = usersParseado.filter((usuario) => usuario.email == email)
            if (usersFiltardo.length == 1) {
                alert("Ya existe un usuario con el email ingresado")
                return
            } else {
                usersParseado.push(usuarioACrear)
                let usersEnJson = JSON.stringify(usersParseado)
                localStorage.setItem("users", usersEnJson)

            }
        } else {
            let usersInicial = []
            usersInicial.push(usuarioACrear)
            let usersEnJson = JSON.stringify(usersInicial)
            localStorage.setItem("users", usersEnJson)


        }

        props.history.push("/LogIn")


    }

    function cambioInput(evento) {
        if (evento.target.id == 'password') {
            this.setState({ contrasena: evento.target.value })
        }
        if (evento.target.id == 'username') {
            this.setState({ username: evento.target.value })
        }
        if (evento.target.id == 'email') {
            this.setState({ email: evento.target.value })
        }
        console.log(evento.target.value)
    }


    
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={(evento) => this.evitarEnvio(evento)}>
                        <div className="form-group">
                            <label for="username">Nombre de usuario</label>
                            <input onChange={(evento) => this.cambioInput(evento)} type="text" className="form-control" id="username" placeholder="Ingresá tu nombre de usuario" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input onChange={(evento) => this.cambioInput(evento)} type="email" className="form-control" id="email" placeholder="Ingresá tu email" />
                        </div>
                        <div className="form-group">
                            <label for="password">Contraseña</label>
                            <input onChange={(evento) => this.cambioInput(evento)} type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                    </form>
                    <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/LogIn">Iniciar sesión</Link></p>
                </div>
            </div>
        )
    }


export default withRouter(FormRegister); 