import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GoogleLogin from 'react-google-login';
import googleLogin from "../services/googleLogin"
export const HOST = process.env.REACT_APP_HOST
//import Cookies from 'js-cookie';


/*
const API_HOST = HOST + '/';
let _csrfToken = null;
async function getCsrfToken() {
    if (_csrfToken === null) {
        const response = await fetch(`${API_HOST}/csrf/`, {
            credentials: 'include',
        });
        const data = await response.json();
        _csrfToken = data.csrfToken;
    }
    return _csrfToken;
}
*/
//getCsrfToken().then(val => Cookies.set('csrftoken', val, { path: '' }))

toast.configure()

export default class GoogleSocialAuth extends Component {

    state = {
        user: null,
        password: null
    }



    verificar_user = async (login, password) => {
        const newUser = {
            username: login,
            password: password
        }

        const notify = (e) => {
            toast.error(e, { position: toast.POSITION.TOP_CENTER })
        }


        var axios = require('axios');
        var qs = require('qs');

        var data = qs.stringify(newUser);
        var config = {
            method: 'post',
            url: HOST + '/dj-rest-auth/login/',
            data: data
        };

        await axios(config).then(response => localStorage.setItem('token', response.data.key)).catch(function (error) {
            if (error.response) {

                if (error.response.data.non_field_errors) { notify(`error:  ${error.response.data.non_field_errors[0]}`); }
                console.log(error.response);
            }
        });

        if (localStorage.getItem("token")) {

            console.log(localStorage.getItem("token"))
            //console.log(localStorage.getItem("user_id"))

            var config = {
                method: 'get',
                url: HOST + '/is_staff/',
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            };

            await axios(config).then(response => {
                localStorage.setItem('is_staff', response.data.is_staff)
                localStorage.setItem('id', response.data.id)
                localStorage.setItem('username', response.data.username)
            })
            window.location.href = HOST + '/users/usr/'
        }


    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.verificar_user(this.state.user, this.state.password)

    }

    render() {
        const responseGoogle = (response) => {
            console.log(response);
            console.log("hola")
        }
        const googleResponse = async (response) => {
            console.log("Datos obtenidos de google", response)
            let responseGoogle = await googleLogin(response.accessToken)
            console.log("Respuesta obtenido de google Login para el ajax: ", responseGoogle)
            localStorage.setItem('token', response.accessToken)
            
            if (localStorage.getItem("token")) {

                
                var config = {
                    method: 'GET',
                    url: HOST + '/is_staff/',
                    headers: {
                        'Authorization': 'Token ' + responseGoogle.key,
                        'Content-Type': 'application/json'
                    }
                };
                var axios = require('axios');
                await axios(config).then(response => {
                    localStorage.setItem('is_staff', response.data.is_staff)
                    localStorage.setItem('id', response.data.id)
                    localStorage.setItem('username', response.data.username)
                })
                window.location.href = HOST + '/users/usr/'
            }
        }

        if (!localStorage.getItem("token")) {
            return (
                <div className="col-md-4 offset-md-4 align-self-sm-end">
                    <div className="card card-body border border-primary shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="text-center " >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
                &nbsp;Inicio de Sesión
              </h2>
                        <br />
                        <h5>
                            &nbsp;&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                Usuario
                </h5>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="user"
                                    className="form-control rounded-pill"
                                    placeholder="Ej: usuario"
                                    onChange={this.onChange}
                                    value={this.state.user}
                                />
                            </div>
                            <h5>
                                &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-lock" viewBox="0 0 22 22">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                </svg>
                Password
                            </h5>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control rounded-pill"
                                    placeholder="********"
                                    name="password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-primary rounded-pill"> Ingresar</button>
                        </form>
                        <p className="lead align-self-center"> o </p>
                        <div className="App">
                            <h1> Ingresa con Gmail </h1>

                            <GoogleLogin
                                clientId="822886799677-jgmhd4dtp3v0jqqleaj04k832uv14sb8.apps.googleusercontent.com"
                                buttonText="Login con Google"
                                onSuccess={googleResponse}
                                onFailure={() => {console.log("Login fallido")}}
                            />

            </div>
            <br /> 
                        <div className=" align-self-end">
                            <Link className="nav-link" to={{ pathname: '/Registro' }} >Registrarse </Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            window.location.href = HOST + '/users/usr/'
        }
    }
}

