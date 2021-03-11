import React, { Component } from 'react'
import ARamo from './ARamo'
import Semestre from './Semestre'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()


export default class AvanceManual2018 extends Component {

    state = {
        malla: '2018',
        show: false,
        CBM1000: false, CBM1001: false, CBQ1000: false, CIT1000: false, FIC1000: false, CBM1002: false, CBM1003: false, CBF1000: false, CIT1010: false,
        CFG1: false, CBM1005: false, CBM1006: false, CBF1001: false, CIT2000: false, CIT2100: false, CIT2204: false, CBM2000: false, CBF1002: false, CIT2001: false,
        CFG2: false, CIG1012: false, CII2750: false, CIT2106: false, CIT2200: false, CIT2002: false, CFG3: false, CIG1013: false, CII2000: false, CIT2202: false,
        CIT2101: false, CIT2003: false, CIT2103: false, CII1000: false, CIT2005: false, CIT2102: false, FIC1003: false, CIT2104: false, CIT2203: false, CIT2004: false,
        CIT2105: false, CIT2201: false, CFG4: false, CIT3310: false, CIT3410: false, CIT3412: false, CIT3200: false, CIT3312: false, CIT3311: false, CIT3411: false,
        CIT3413: false, CIT3201: false, CIT3313: false, CIG1014: false, CIT6001: false, CIT6002: false

    }

    onSubmit = e => {
        e.preventDefault();

        const notify = (e) => {
            toast.info(e, { position: toast.POSITION.TOP_CENTER })
        }

        const err = (e) => {
            toast.error(e, { position: toast.POSITION.TOP_CENTER })
        }

        const Avance = { state: this.state }
        const payload = Avance.state
        var data = JSON.stringify(payload);
        var config = {
            method: 'post',
            url: 'http://200.14.84.238:80/mimallamanual/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem("token")
            },
            data: data
        };

        axios(config).then(response => {
            if (response.status === 201) {
                setTimeout(function () { notify("Ahora puedes obtener tus ramos críticos"); }, 1000); //cambia esto por toast
                localStorage.setItem("malla",this.state.malla) //se borra cuando apreto un boton
                //setTimeout(function () { window.location.href = 'http://200.14.84.238:80/users/usr/PERT'; }, 4500);
            } else {
                err("Error verifica los seleccionados")
            }

        }).catch(function (error) {
            if (error.response) {
                if (error.response.data.error) { err(`error:  ${error.response.data.error}`); }

            }
        });

    }

    render() {
        return (
            <div className="container">
                <br />

                <div className="row row-cols-10">
                    <Semestre semestre={"1"} />
                    <Semestre semestre={"2"} />
                    <Semestre semestre={"3"} />
                    <Semestre semestre={"4"} />
                    <Semestre semestre={"5"} />
                    <Semestre semestre={"6"} />
                    <Semestre semestre={"7"} />
                    <Semestre semestre={"8"} />
                    <Semestre semestre={"9"} />
                    <Semestre semestre={"10"} />
                </div>

                <br />

                <div className="card border-0">
                    <div className="row row-cols-10 align-items-start">
                        <div className="col border-0">
                            &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick={this.onChange1_5} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col justify-content-center border-0">
                            &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick={this.onChange6_10} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col justify-content-center border-0">
                            &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick={this.onChange11_15}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col justify-content-center border-0">
                            &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick={this.onChange16_21} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col justify-content-center border-0">
                            &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick={this.onChange22_27} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col justify-content-center border-0">
                            &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick={this.onChange28_33} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col justify-content-center border-0">
                            &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick={this.onChange34_38} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col justify-content-center border-0">
                            &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick={this.onChange39_43} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col justify-content-center border-0">
                            &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick={this.onChange44_48} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col justify-content-center border-0">
                            &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick={this.onChange49_53} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <br />
                {/*   show= {this.state.AR} onChange1 = {this.onChange}      */}
                <form onSubmit={this.onSubmit}>
                    <div className="row row-cols-10 ">
                        <ARamo codigo={"CBM1000"} ramo={"Álgebra y Geometría"} show={this.state.CBM1000} onChange1={this.onChange1} />
                        <ARamo codigo={"CBM1002"} ramo={"Álgebra Lineal"} show={this.state.CBM1002} onChange1={this.onChange6} />
                        <ARamo codigo={"CBM1005"} ramo={"Ecuaciones Difl."} show={this.state.CBM1005} onChange1={this.onChange11} />
                        <ARamo codigo={"CIT2204"} ramo={"Prob. y Estadisticas"} show={this.state.CIT2204} onChange1={this.onChange16} />
                        <ARamo codigo={"CII2750"} ramo={"Optimiza- ción"} show={this.state.CII2750} onChange1={this.onChange22} />
                        <ARamo codigo={"CII2000"} ramo={"Introd. a la Economía"} show={this.state.CII2000} onChange1={this.onChange28} />
                        <ARamo codigo={"CII1000"} ramo={"Contabi- lidad y Costos"} show={this.state.CII1000} onChange1={this.onChange33} />
                        <ARamo codigo={"CIT2203"} ramo={"Gestión Organiza- cional"} show={this.state.CIT2203} onChange1={this.onChange38} />
                        <ARamo codigo={"CIT3310"} ramo={"Electivo Profesional"} show={this.state.CIT3310} onChange1={this.onChange43} />
                        <ARamo codigo={"CIT3311"} ramo={"Electivo Profesional"} show={this.state.CIT3311} onChange1={this.onChange48} />
                    </div>
                    <br />

                    <div className="row row-cols-10">

                        <ARamo codigo={"CBM1001"} ramo={"Cálculo I"} show={this.state.CBM1001} onChange1={this.onChange2} />
                        <ARamo codigo={"CBM1003"} ramo={"Cálculo II"} show={this.state.CBM1003} onChange1={this.onChange7} />
                        <ARamo codigo={"CBM1006"} ramo={"Cálculo III"} show={this.state.CBM1006} onChange1={this.onChange12} />
                        <ARamo codigo={"CBM2000"} ramo={"Métodos Numéricos"} show={this.state.CBM2000} onChange1={this.onChange17} />
                        <ARamo codigo={"CIT2106"} ramo={"Electrónica y Electro- tecnia"} show={this.state.CIT2106} onChange1={this.onChange23} />
                        <ARamo codigo={"CIT2202"} ramo={"Modelos Estoc. y Simul."} show={this.state.CIT2202} onChange1={this.onChange29} />
                        <ARamo codigo={"CIT2005"} ramo={"Ingeniería de Software"} show={this.state.CIT2005} onChange1={this.onChange34} />
                        <ARamo codigo={"CIT2004"} ramo={"Arquitec- tura de Sistemas"} show={this.state.CIT2004} onChange1={this.onChange39} />
                        <ARamo codigo={"CIT3410"} ramo={"Electivo Profesional"} show={this.state.CIT3410} onChange1={this.onChange44} />
                        <ARamo codigo={"CIT3411"} ramo={"Electivo Profesional"} show={this.state.CIT3411} onChange1={this.onChange49} />
                    </div>

                    <br />

                    <div className="row row-cols-10">
                        <ARamo codigo={"CBQ1000"} ramo={"Química"} show={this.state.CBQ1000} onChange1={this.onChange3} />
                        <ARamo codigo={"CBF1000"} ramo={"Mecánica"} show={this.state.CBF1000} onChange1={this.onChange8} />
                        <ARamo codigo={"CBF1001"} ramo={"Calor y Ondas"} show={this.state.CBF1001} onChange1={this.onChange13} />
                        <ARamo codigo={"CBF1002"} ramo={"Electricidad y Magnetismo"} show={this.state.CBF1002} onChange1={this.onChange18} />
                        <ARamo codigo={"CIT2200"} ramo={"Proyectos en TICs I"} show={this.state.CIT2200} onChange1={this.onChange24} />
                        <ARamo codigo={"CIT2101"} ramo={"Señales y Sistemas"} show={this.state.CIT2101} onChange1={this.onChange30} />
                        <ARamo codigo={"CIT2102"} ramo={"Comunica- ciones Digitales"} show={this.state.CIT2102} onChange1={this.onChange35} />
                        <ARamo codigo={"CIT2105"} ramo={"Criptografía y Seg. en Redes"} show={this.state.CIT2105} onChange1={this.onChange40} />
                        <ARamo codigo={"CIT3412"} ramo={"Electivo Profesional"} show={this.state.CIT3412} onChange1={this.onChange45} />
                        <ARamo codigo={"CIT3413"} ramo={"Electivo Profesional"} show={this.state.CIT3413} onChange1={this.onChange50} />
                    </div>
                    <br />
                    <div className="row row-cols-10">
                        <ARamo codigo={"CIT1000"} ramo={"Programa- ción"} show={this.state.CIT1000} onChange1={this.onChange4} />
                        <ARamo codigo={"CIT1010"} ramo={"Programa- ción Avanzada"} show={this.state.CIT1010} onChange1={this.onChange9} />
                        <ARamo codigo={"CIT2000"} ramo={"Estructura de Datos"} show={this.state.CIT2000} onChange1={this.onChange14} />
                        <ARamo codigo={"CIT2001"} ramo={"Dis. y Análisis de Alg."} show={this.state.CIT2001} onChange1={this.onChange19} />
                        <ARamo codigo={"CIT2002"} ramo={"Bases de Datos"} show={this.state.CIT2002} onChange1={this.onChange25} />
                        <ARamo codigo={"CIT2003"} ramo={"Sistemas Operativos"} show={this.state.CIT2003} onChange1={this.onChange31} />
                        <ARamo codigo={"FIC1003"} ramo={"Derecho en Ingeniería"} show={this.state.FIC1003} onChange1={this.onChange36} />
                        <ARamo codigo={"CIT2201"} ramo={"Proyecto en TICs II"} show={this.state.CIT2201} onChange1={this.onChange41} />
                        <ARamo codigo={"CIT3200"} ramo={"Evaluación de Proy. TIC"} show={this.state.CIT3200} onChange1={this.onChange46} />
                        <ARamo codigo={"CIT3201"} ramo={"Proyecto en TICs III"} show={this.state.CIT3201} onChange1={this.onChange51} />
                    </div>
                    <br />
                    <div className="row row-cols-10">
                        <ARamo codigo={"FIC1000"} ramo={"Comunica- ción para la Ing."} show={this.state.FIC1000} onChange1={this.onChange5} />
                        <ARamo codigo={"CFG1"} ramo={"Minor / CFG"} show={this.state.CFG1} onChange1={this.onChange10} />
                        <ARamo codigo={"CIT2100"} ramo={"Redes de Datos"} show={this.state.CIT2100} onChange1={this.onChange15} />
                        <ARamo codigo={"CFG2"} ramo={"Minor / CFG"} show={this.state.CFG2} onChange1={this.onChange20} />
                        <ARamo codigo={"CFG3"} ramo={"Minor / CFG"} show={this.state.CFG3} onChange1={this.onChange26} />
                        <ARamo codigo={"CIT2103"} ramo={"Sistemas Digitales"} show={this.state.CIT2103} onChange1={this.onChange32} />
                        <ARamo codigo={"CIT2104"} ramo={"Arquitec- tura de Comp."} show={this.state.CIT2104} onChange1={this.onChange37} />
                        <ARamo codigo={"CFG4"} ramo={"Minor / CFG"} show={this.state.CFG4} onChange1={this.onChange42} />
                        <ARamo codigo={"CIT3312"} ramo={"Electivo Profesional"} show={this.state.CIT3312} onChange1={this.onChange47} />
                        <ARamo codigo={"CIT3313"} ramo={"Electivo Profesional"} show={this.state.CIT3313} onChange1={this.onChange52} />
                    </div>
                    <br />


                    <div className="row row-cols-10">
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <ARamo codigo={"CIG1012"} ramo={"Inglés I"} show={this.state.CIG1012} onChange1={this.onChange21} />
                        <ARamo codigo={"CIG1013"} ramo={"Inglés II"} show={this.state.CIG1013} onChange1={this.onChange27} />
                        <ARamo codigo={"CIG1014"} ramo={"Inglés II"} show={this.state.CIG1014} onChange1={this.onChange53} />
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>

                    </div>
                    <br />
                    <div className="row row-cols-10">
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <ARamo codigo={"CIT6001"} ramo={"Practia I"} show={this.state.CIT6001} onChange1={this.onChangePR1} />
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <ARamo codigo={"CIT6002"} ramo={"Practica II"} show={this.state.CIT6002} onChange1={this.onChangePR2} />
                        <div className="col"> </div>

                    </div>
                    <br />
                    <div className="row row-cols-10">
                        <div className="col">
                            <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2018' }} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>

                        <div className="col">

                            <div className="col ">
                                <div className="card border-0">
                                    <button className="btn btn-primary rounded-pill " type="submit">Guardar</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </form>

                <br />
                <br />
                <br />




            </div>


        )


    }


    onChange1_5 = (e) => {
        this.setState(prevState => ({
            CBM1000: !this.state.CBM1000,
            CBM1001: !this.state.CBM1001,
            CBQ1000: !this.state.CBQ1000,
            CIT1000: !this.state.CIT1000,
            FIC1000: !this.state.FIC1000
        }))
    }
    onChange6_10 = (e) => {
        this.setState(prevState => ({
            CBM1002: !this.state.CBM1002,
            CBM1003: !this.state.CBM1003,
            CBF1000: !this.state.CBF1000,
            CIT1010: !this.state.CIT1010,
            CFG1: !this.state.CFG1
        }))
    }
    onChange11_15 = (e) => {
        this.setState(prevState => ({
            CBM1005: !this.state.CBM1005,
            CBM1006: !this.state.CBM1006,
            CBF1001: !this.state.CBF1001,
            CIT2000: !this.state.CIT2000,
            CIT2100: !this.state.CIT2100
        }))
    }
    onChange16_21 = (e) => {
        this.setState(prevState => ({
            CIT2204: !this.state.CIT2204,
            CBM2000: !this.state.CBM2000,
            CBF1002: !this.state.CBF1002,
            CIT2001: !this.state.CIT2001,
            CFG2: !this.state.CFG2,
            CIG1012: !this.state.CIG1012
        }))
    }
    onChange22_27 = (e) => {
        this.setState(prevState => ({
            CII2750: !this.state.CII2750,
            CIT2106: !this.state.CIT2106,
            CIT2200: !this.state.CIT2200,
            CIT2002: !this.state.CIT2002,
            CFG3: !this.state.CFG3,
            CIG1013: !this.state.CIG1013
        }))
    }
    onChange28_33 = (e) => {
        this.setState(prevState => ({
            CII2000: !this.state.CII2000,
            CIT2202: !this.state.CIT2202,
            CIT2101: !this.state.CIT2101,
            CIT2003: !this.state.CIT2003,
            CIT2103: !this.state.CIT2103,
            CIG1014: !this.state.CIG1014
        }))
    }
    onChange34_38 = (e) => {
        this.setState(prevState => ({
            CII1000: !this.state.CII1000,
            CIT2005: !this.state.CIT2005,
            CIT2102: !this.state.CIT2102,
            FIC1003: !this.state.FIC1003,
            CIT2104: !this.state.CIT2104,

        }))
    }
    v
    onChange39_43 = (e) => {
        this.setState(prevState => ({
            CIT2203: !this.state.CIT2203,
            CIT2004: !this.state.CIT2004,
            CIT2105: !this.state.CIT2105,
            CIT2201: !this.state.CIT2201,
            CFG4: !this.state.CFG4,

        }))
    }
    onChange44_48 = (e) => {
        this.setState(prevState => ({
            CIT3310: !this.state.CIT3310,
            CIT3410: !this.state.CIT3410,
            CIT3412: !this.state.CIT3412,
            CIT3200: !this.state.CIT3200,
            CIT3312: !this.state.CIT3312,

        }))
    }
    onChange49_53 = (e) => {
        this.setState(prevState => ({
            CIT3311: !this.state.CIT3311,
            CIT3411: !this.state.CIT3411,
            CIT3413: !this.state.CIT3413,
            CIT3201: !this.state.CIT3201,
            CIT3313: !this.state.CIT3313,
        }))
    }



    onChange1 = (e) => {
        this.setState(prevState => ({
            CBM1000: !prevState.CBM1000
        }))
    }
    onChange2 = (e) => {
        this.setState(prevState => ({
            CBM1001: !prevState.CBM1001
        }))
    }
    onChange3 = (e) => {
        this.setState(prevState => ({
            CBQ1000: !prevState.CBQ1000
        }))
    }
    onChange4 = (e) => {
        this.setState(prevState => ({
            CIT1000: !prevState.CIT1000
        }))
    }
    onChange5 = (e) => {
        this.setState(prevState => ({
            FIC1000: !prevState.FIC1000
        }))
    }
    onChange6 = (e) => {
        this.setState(prevState => ({
            CBM1002: !prevState.CBM1002
        }))
    }
    onChange7 = (e) => {
        this.setState(prevState => ({
            CBM1003: !prevState.CBM1003
        }))
    }
    onChange8 = (e) => {
        this.setState(prevState => ({
            CBF1000: !prevState.CBF1000
        }))
    }
    onChange9 = (e) => {
        this.setState(prevState => ({
            CIT1010: !prevState.CIT1010
        }))
    }

    onChange10 = (e) => {
        this.setState(prevState => ({
            CFG1: !prevState.CFG1
        }))
    }

    onChange11 = (e) => {
        this.setState(prevState => ({
            CBM1005: !prevState.CBM1005
        }))
    }
    onChange12 = (e) => {
        this.setState(prevState => ({
            CBM1006: !prevState.CBM1006
        }))
    }
    onChange13 = (e) => {
        this.setState(prevState => ({
            CBF1001: !prevState.CBF1001
        }))
    }
    onChange14 = (e) => {
        this.setState(prevState => ({
            CIT2000: !prevState.CIT2000
        }))
    }
    onChange15 = (e) => {
        this.setState(prevState => ({
            CIT2100: !prevState.CIT2100
        }))
    }
    onChange16 = (e) => {
        this.setState(prevState => ({
            CIT2204: !prevState.CIT2204
        }))
    }
    onChange17 = (e) => {
        this.setState(prevState => ({
            CBM2000: !prevState.CBM2000
        }))
    }
    onChange18 = (e) => {
        this.setState(prevState => ({
            CBF1002: !prevState.CBF1002
        }))
    }
    onChange19 = (e) => {
        this.setState(prevState => ({
            CIT2001: !prevState.CIT2001
        }))
    }

    onChange20 = (e) => {
        this.setState(prevState => ({
            CFG2: !prevState.CFG2
        }))
    }
    onChange21 = (e) => {
        this.setState(prevState => ({
            CIG1012: !prevState.CIG1012
        }))
    }
    onChange22 = (e) => {
        this.setState(prevState => ({
            CII2750: !prevState.CII2750
        }))
    }
    onChange23 = (e) => {
        this.setState(prevState => ({
            CIT2106: !prevState.CIT2106
        }))
    }
    onChange24 = (e) => {
        this.setState(prevState => ({
            CIT2200: !prevState.CIT2200
        }))
    }
    onChange25 = (e) => {
        this.setState(prevState => ({
            CIT2002: !prevState.CIT2002
        }))
    }
    onChange26 = (e) => {
        this.setState(prevState => ({
            CFG3: !prevState.CFG3
        }))
    }
    onChange27 = (e) => {
        this.setState(prevState => ({
            CIG1013: !prevState.CIG1013
        }))
    }
    onChange28 = (e) => {
        this.setState(prevState => ({
            CII2000: !prevState.CII2000
        }))
    }
    onChange29 = (e) => {
        this.setState(prevState => ({
            CIT2202: !prevState.CIT2202
        }))
    }

    onChange30 = (e) => {
        this.setState(prevState => ({
            CIT2101: !prevState.CIT2101
        }))
    }
    onChange31 = (e) => {
        this.setState(prevState => ({
            CIT2003: !prevState.CIT2003
        }))
    }
    onChange32 = (e) => {
        this.setState(prevState => ({
            CIT2103: !prevState.CIT2103
        }))
    }
    onChange33 = (e) => {
        this.setState(prevState => ({
            CII1000: !prevState.CII1000
        }))
    }
    onChange34 = (e) => {
        this.setState(prevState => ({
            CIT2005: !prevState.CIT2005
        }))
    }
    onChange35 = (e) => {
        this.setState(prevState => ({
            CIT2102: !prevState.CIT2102
        }))
    }
    onChange36 = (e) => {
        this.setState(prevState => ({
            FIC1003: !prevState.FIC1003
        }))
    }
    onChange37 = (e) => {
        this.setState(prevState => ({
            CIT2104: !prevState.CIT2104
        }))
    }
    onChange38 = (e) => {
        this.setState(prevState => ({
            CIT2203: !prevState.CIT2203
        }))
    }
    onChange39 = (e) => {
        this.setState(prevState => ({
            CIT2004: !prevState.CIT2004
        }))
    }
    onChange40 = (e) => {
        this.setState(prevState => ({
            CIT2105: !prevState.CIT2105
        }))
    }
    onChange41 = (e) => {
        this.setState(prevState => ({
            CIT2201: !prevState.CIT2201
        }))
    }
    onChange42 = (e) => {
        this.setState(prevState => ({
            CFG4: !prevState.CFG4
        }))
    }
    onChange43 = (e) => {
        this.setState(prevState => ({
            CIT3310: !prevState.CIT3310
        }))
    }
    onChange44 = (e) => {
        this.setState(prevState => ({
            CIT3410: !prevState.CIT3410
        }))
    }
    onChange45 = (e) => {
        this.setState(prevState => ({
            CIT3412: !prevState.CIT3412
        }))
    }
    onChange46 = (e) => {
        this.setState(prevState => ({
            CIT3200: !prevState.CIT3200
        }))
    }
    onChange47 = (e) => {
        this.setState(prevState => ({
            CIT3312: !prevState.CIT3312
        }))
    }
    onChange48 = (e) => {
        this.setState(prevState => ({
            CIT3311: !prevState.CIT3311
        }))
    }
    onChange49 = (e) => {
        this.setState(prevState => ({
            CIT3411: !prevState.CIT3411
        }))
    }

    onChange50 = (e) => {
        this.setState(prevState => ({
            CIT3413: !prevState.CIT3413
        }))
    }
    onChange51 = (e) => {
        this.setState(prevState => ({
            CIT3201: !prevState.CIT3201
        }))
    }
    onChange52 = (e) => {
        this.setState(prevState => ({
            CIT3313: !prevState.CIT3313
        }))
    }
    onChange53 = (e) => {
        this.setState(prevState => ({
            CIG1014: !prevState.CIG1014
        }))
    }
    onChangePR1 = (e) => {
        this.setState(prevState => ({
            CIT6001: !prevState.CIT6001
        }))
    }
    onChangePR2 = (e) => {
        this.setState(prevState => ({
            CIT6002: !prevState.CIT6002
        }))
    }
}
