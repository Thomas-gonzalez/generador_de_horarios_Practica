import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="/users/usr">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-calendar2-range" viewBox="0 0 20 20">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM9 8a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zm-8 2h4a1 1 0 1 1 0 2H1v-2z"/>
                </svg>    
                    Generador de Horarios
                </a>
             
                
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr'}}style={{ color: '#FFF' }} >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas'}}style={{ color: '#FFF' }} >Mi Malla</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr/crearHorario'}}style={{ color: '#FFF' }} >Mi Avance Curricular</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr/priorizarRamos/priorizar'}}style={{ color: '#FFF' }} >Priorizar Ramos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr/PERT'}}style={{ color: '#FFF' }} >PERT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr/horariosPosibles'}}style={{ color: '#FFF' }} >Horarios Posibles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/'}}style={{ color: '#FFF' }} >Salir</Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
            </nav>
        )
    }
}