import React, { Component } from 'react'
import ARamo from './ARamo'
import Semestre from './Semestre'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()


export default class AvanceManual2020 extends Component {
    state = {
        malla: '2020',
        show: false,
        CBM1000: false, CBM1001: false, CBQ1000: false, CIT1000: false, FIC1000: false, CBM1002: false, CBM1003: false, CBF1000: false, CIT1010: false,
        CFG1: false, CBM1005: false, CBM1006: false, CBF1001: false, CIT2006: false, CIT2114: false, CIT2204: false, CIT2107: false, CBF1002: false, CIT2007: false,
        CIT2008: false, CIG1012: false, CII2750: false, CIT2108: false, CIT2205: false, CIT2009: false, CFG2: false, CIG1013: false, CII1000: false, CIT2109: false,
        CIT2110: false, CIT2010: false, CFG3: false, CIG1014: false, CIT2206: false, CIT2011: false, CIT2111: false, CIT2012: false, CFG4: false, CII2100: false,
        CIT2112: false, CIT2113: false, CIT2013: false, CIT2207: false, CITOPTINF1: false, CIT3100: false, CITOPTTEL1: false, CIT3000: false, CIT3202: false, CITOPTINF2: false,
        CITOPTTEL2: false, CITOPTTEL3: false, CITOPTINF3: false, CIT3203: false, CIT4000: false, CIT4001: false

    }

    onSubmit = async (e) => {
        e.preventDefault();

        const notify = (e) => {
            toast.info(e, { position: toast.POSITION.TOP_CENTER })
        }
        const err = (e) => {
            toast.error(e, { position: toast.POSITION.TOP_CENTER })
        }


        const Avance = { state: this.state }
        const payload = Avance.state
        //console.log(Avance)

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
                <div className="row  row-cols-10">
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
                <form onSubmit={this.onSubmit}>
                    <div className="row  row-cols-10">
                        <ARamo codigo={"CBM1000"} ramo={"Álgebra y Geometría"} show={this.state.CBM1000} onChange1={this.onChange1} />
                        <ARamo codigo={"CBM1002"} ramo={"Álgebra Lineal"} show={this.state.CBM1002} onChange1={this.onChange6} />
                        <ARamo codigo={"CBM1005"} ramo={"Ecuaciones Difl."} show={this.state.CBM1005} onChange1={this.onChange11} />
                        <ARamo codigo={"CIT2204"} ramo={"Prob. y Estadisticas"} show={this.state.CIT2204} onChange1={this.onChange16} />
                        <ARamo codigo={"CII2750"} ramo={"Optimiza- ción"} show={this.state.CII2750} onChange1={this.onChange22} />
                        <ARamo codigo={"CII1000"} ramo={"Contabi- lidad y Costos"} show={this.state.CII1000} onChange1={this.onChange28} />
                        <ARamo codigo={"CIT2206"} ramo={"Gestión Organiza- cional"} show={this.state.CIT2206} onChange1={this.onChange34} />
                        <ARamo codigo={"CII2100"} ramo={"Introd. a la Economía"} show={this.state.CII2100} onChange1={this.onChange39} />
                        <ARamo codigo={"CITOPTINF1"} ramo={"Electivo Profesional"} show={this.state.CITOPTINF1} onChange1={this.onChange44} />
                        <ARamo codigo={"CITOPTINF2"} ramo={"Electivo Profesional"} show={this.state.CITOPTINF2} onChange1={this.onChange49} />
                    </div>
                    <br />

                    <div className="row  row-cols-10">
                        <ARamo codigo={"CBM1001"} ramo={"Cálculo I"} show={this.state.CBM1001} onChange1={this.onChange2} />
                        <ARamo codigo={"CBM1003"} ramo={"Cálculo II"} show={this.state.CBM1003} onChange1={this.onChange7} />
                        <ARamo codigo={"CBM1006"} ramo={"Cálculo III"} show={this.state.CBM1006} onChange1={this.onChange12} />
                        <ARamo codigo={"CIT2107"} ramo={"Electrónica y Electro-  tecnia"} show={this.state.CIT2107} onChange1={this.onChange17} />
                        <ARamo codigo={"CIT2108"} ramo={"T. de Redes y Servicios"} show={this.state.CIT2108} onChange1={this.onChange23} />
                        <ARamo codigo={"CIT2109"} ramo={"Arq y Org de Com- putadores"} show={this.state.CIT2109} onChange1={this.onChange29} />
                        <ARamo codigo={"CIT2011"} ramo={"Sistemas Distribuidos"} show={this.state.CIT2011} onChange1={this.onChange35} />
                        <ARamo codigo={"CIT2112"} ramo={"Tecnologías Inalámbricas"} show={this.state.CIT2112} onChange1={this.onChange40} />
                        <ARamo codigo={"CIT3100"} ramo={"Arquitec- turas Emergentes"} show={this.state.CIT3100} onChange1={this.onChange45} />
                        <ARamo codigo={"CITOPTTEL2"} ramo={"Electivo Profesional"} show={this.state.CITOPTTEL2} onChange1={this.onChange50} />
                    </div>

                    <br />

                    <div className="row  row-cols-10">
                        <ARamo codigo={"CBQ1000"} ramo={"Química"} show={this.state.CBQ1000} onChange1={this.onChange3} />
                        <ARamo codigo={"CBF1000"} ramo={"Mecánica"} show={this.state.CBF1000} onChange1={this.onChange8} />
                        <ARamo codigo={"CBF1001"} ramo={"Calor y Ondas"} show={this.state.CBF1001} onChange1={this.onChange13} />
                        <ARamo codigo={"CBF1002"} ramo={"Electricidad y Magnetismo"} show={this.state.CBF1002} onChange1={this.onChange18} />
                        <ARamo codigo={"CIT2205"} ramo={"Proyectos en TICs I"} show={this.state.CIT2205} onChange1={this.onChange24} />
                        <ARamo codigo={"CIT2110"} ramo={"Señales y Sistemas"} show={this.state.CIT2110} onChange1={this.onChange30} />
                        <ARamo codigo={"CIT2111"} ramo={"Comunica- ciones Digitales"} show={this.state.CIT2111} onChange1={this.onChange36} />
                        <ARamo codigo={"CIT2113"} ramo={"Criptografía y Seg. en Redes"} show={this.state.CIT2113} onChange1={this.onChange41} />
                        <ARamo codigo={"CITOPTTEL1"} ramo={"Electivo Profesional"} show={this.state.CITOPTTEL1} onChange1={this.onChange46} />
                        <ARamo codigo={"CITOPTTEL3"} ramo={"Electivo Profesional"} show={this.state.CITOPTTEL3} onChange1={this.onChange51} />
                    </div>

                    <br />

                    <div className="row  row-cols-10">
                        <ARamo codigo={"CIT1000"} ramo={"Programa- ción"} show={this.state.CIT1000} onChange1={this.onChange4} />
                        <ARamo codigo={"CIT1010"} ramo={"Programa- ción Avanzada"} show={this.state.CIT1010} onChange1={this.onChange9} />
                        <ARamo codigo={"CIT2006"} ramo={"Estruct. de Datos y Alg."} show={this.state.CIT2006} onChange1={this.onChange14} />
                        <ARamo codigo={"CIT2007"} ramo={"Bases de Datos"} show={this.state.CIT2007} onChange1={this.onChange19} />
                        <ARamo codigo={"CIT2009"} ramo={"B. de Datos Avanzadas"} show={this.state.CIT2009} onChange1={this.onChange25} />
                        <ARamo codigo={"CIT2010"} ramo={"Sistemas Operativos"} show={this.state.CIT2010} onChange1={this.onChange31} />
                        <ARamo codigo={"CIT2012"} ramo={"Ingeniería de Software"} show={this.state.CIT2012} onChange1={this.onChange37} />
                        <ARamo codigo={"CIT2013"} ramo={"Inteligencia Artifical"} show={this.state.CIT2013} onChange1={this.onChange42} />
                        <ARamo codigo={"CIT3000"} ramo={"Arquitec- tura de Software"} show={this.state.CIT3000} onChange1={this.onChange47} />
                        <ARamo codigo={"CITOPTINF3"} ramo={"Electivo Profesional"} show={this.state.CITOPTINF3} onChange1={this.onChange52} />
                    </div>

                    <br />

                    <div className="row  row-cols-10">
                        <ARamo codigo={"FIC1000"} ramo={"Comunica- ción para la Ing."} show={this.state.FIC1000} onChange1={this.onChange5} />
                        <ARamo codigo={"CFG1"} ramo={"Minor / CFG"} show={this.state.CFG1} onChange1={this.onChange10} />
                        <ARamo codigo={"CIT2114"} ramo={"Redes de Datos"} show={this.state.CIT2114} onChange1={this.onChange15} />
                        <ARamo codigo={"CIT2008"} ramo={"Desarrollo Web y Móvil"} show={this.state.CIT2008} onChange1={this.onChange20} />
                        <ARamo codigo={"CFG2"} ramo={"Minor / CFG"} show={this.state.CFG2} onChange1={this.onChange26} />
                        <ARamo codigo={"CFG3"} ramo={"Minor / CFG"} show={this.state.CFG3} onChange1={this.onChange32} />
                        <ARamo codigo={"CFG4"} ramo={"Minor / CFG"} show={this.state.CFG4} onChange1={this.onChange38} />
                        <ARamo codigo={"CIT2207"} ramo={"Evaluación de Proy. TIC"} show={this.state.CIT2207} onChange1={this.onChange43} />
                        <ARamo codigo={"CIT3202"} ramo={"Data Science"} show={this.state.CIT3202} onChange1={this.onChange48} />
                        <ARamo codigo={"CIT3203"} ramo={"Proyecto en TICs II"} show={this.state.CIT3203} onChange1={this.onChange53} />
                    </div>

                    <br />

                    <div className="row  row-cols-10">
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <ARamo codigo={"CIG1012"} ramo={"Inglés I"} show={this.state.CIG1012} onChange1={this.onChange21} />
                        <ARamo codigo={"CIG1013"} ramo={"Inglés II"} show={this.state.CIG1013} onChange1={this.onChange27} />
                        <ARamo codigo={"CIG1014"} ramo={"Inglés III"} show={this.state.CIG1014} onChange1={this.onChange33} />
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
                        <ARamo codigo={"CIT4000"} ramo={"Práctica I"} show={this.state.CIT4000} onChange1={this.onChangePR1} />
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <div className="col"> </div>
                        <ARamo codigo={"CIT4001"} ramo={"Práctica II"} show={this.state.CIT4001} onChange1={this.onChangePR2} />
                        <div className="col"> </div>

                    </div>
                    <br />
                    <br />
                    <div className="row row-cols-10">
                        <div className="col">
                            <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2010' }} >
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
            CIT2006: !this.state.CIT2006,
            CIT2114: !this.state.CIT2114
        }))
    }
    onChange16_21 = (e) => {
        this.setState(prevState => ({
            CIT2204: !this.state.CIT2204,
            CIT2107: !this.state.CIT2107,
            CBF1002: !this.state.CBF1002,
            CIT2007: !this.state.CIT2007,
            CIT2008: !this.state.CIT2008,
            CIG1012: !this.state.CIG1012
        }))
    }
    onChange22_27 = (e) => {
        this.setState(prevState => ({
            CII2750: !this.state.CII2750,
            CIT2108: !this.state.CIT2108,
            CIT2205: !this.state.CIT2205,
            CIT2009: !this.state.CIT2009,
            CFG2: !this.state.CFG2,
            CIG1013: !this.state.CIG1013
        }))
    }
    onChange28_33 = (e) => {
        this.setState(prevState => ({
            CII1000: !this.state.CII1000,
            CIT2109: !this.state.CIT2109,
            CIT2110: !this.state.CIT2110,
            CIT2010: !this.state.CIT2010,
            CFG3: !this.state.CFG3,
            CIG1014: !this.state.CIG1014,
        }))
    }
    onChange34_38 = (e) => {
        this.setState(prevState => ({
            CIT2206: !this.state.CIT2206,
            CIT2011: !this.state.CIT2011,
            CIT2111: !this.state.CIT2111,
            CIT2012: !this.state.CIT2012,
            CFG4: !this.state.CFG4

        }))
    }
    v
    onChange39_43 = (e) => {
        this.setState(prevState => ({
            CII2100: !this.state.CII2100,
            CIT2112: !this.state.CIT2112,
            CIT2113: !this.state.CIT2113,
            CIT2013: !this.state.CIT2013,
            CIT2207: !this.state.CIT2207
        }))
    }
    onChange44_48 = (e) => {
        this.setState(prevState => ({

            CITOPTINF1: !this.state.CITOPTINF1,
            CIT3100: !this.state.CIT3100,
            CITOPTTEL1: !this.state.CITOPTTEL1,
            CIT3000: !this.state.CIT3000,
            CIT3202: !this.state.CIT3202
        }))
    }
    onChange49_53 = (e) => {
        this.setState(prevState => ({

            CITOPTINF2: !this.state.CITOPTINF2,
            CITOPTTEL2: !this.state.CITOPTTEL2,
            CITOPTTEL3: !this.state.CITOPTTEL3,
            CITOPTINF3: !this.state.CITOPTINF3,
            CIT3203: !this.state.CIT3203
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
            CIT2006: !prevState.CIT2006
        }))
    }
    onChange15 = (e) => {
        this.setState(prevState => ({
            CIT2114: !prevState.CIT2114
        }))
    }
    onChange16 = (e) => {
        this.setState(prevState => ({
            CIT2204: !prevState.CIT2204
        }))
    }
    onChange17 = (e) => {
        this.setState(prevState => ({
            CIT2107: !prevState.CIT2107
        }))
    }
    onChange18 = (e) => {
        this.setState(prevState => ({
            CBF1002: !prevState.CBF1002
        }))
    }
    onChange19 = (e) => {
        this.setState(prevState => ({
            CIT2007: !prevState.CIT2007
        }))
    }

    onChange20 = (e) => {
        this.setState(prevState => ({
            CIT2008: !prevState.CIT2008
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
            CIT2108: !prevState.CIT2108
        }))
    }
    onChange24 = (e) => {
        this.setState(prevState => ({
            CIT2205: !prevState.CIT2205
        }))
    }
    onChange25 = (e) => {
        this.setState(prevState => ({
            CIT2009: !prevState.CIT2009
        }))
    }
    onChange26 = (e) => {
        this.setState(prevState => ({
            CFG2: !prevState.CFG2
        }))
    }
    onChange27 = (e) => {
        this.setState(prevState => ({
            CIG1013: !prevState.CIG1013
        }))
    }
    onChange28 = (e) => {
        this.setState(prevState => ({
            CII1000: !prevState.CII1000
        }))
    }
    onChange29 = (e) => {
        this.setState(prevState => ({
            CIT2109: !prevState.CIT2109
        }))
    }

    onChange30 = (e) => {
        this.setState(prevState => ({
            CIT2110: !prevState.CIT2110
        }))
    }
    onChange31 = (e) => {
        this.setState(prevState => ({
            CIT2010: !prevState.CIT2010
        }))
    }
    onChange32 = (e) => {
        this.setState(prevState => ({
            CFG3: !prevState.CFG3
        }))
    }
    onChange33 = (e) => {
        this.setState(prevState => ({
            CIG1014: !prevState.CIG1014
        }))
    }
    onChange34 = (e) => {
        this.setState(prevState => ({
            CIT2206: !prevState.CIT2206
        }))
    }
    onChange35 = (e) => {
        this.setState(prevState => ({
            CIT2011: !prevState.CIT2011
        }))
    }
    onChange36 = (e) => {
        this.setState(prevState => ({
            CIT2111: !prevState.CIT2111
        }))
    }
    onChange37 = (e) => {
        this.setState(prevState => ({
            CIT2012: !prevState.CIT2012
        }))
    }
    onChange38 = (e) => {
        this.setState(prevState => ({
            CFG4: !prevState.CFG4
        }))
    }
    onChange39 = (e) => {
        this.setState(prevState => ({
            CII2100: !prevState.CII2100
        }))
    }
    onChange40 = (e) => {
        this.setState(prevState => ({
            CIT2112: !prevState.CIT2112
        }))
    }
    onChange41 = (e) => {
        this.setState(prevState => ({
            CIT2113: !prevState.CIT2113
        }))
    }
    onChange42 = (e) => {
        this.setState(prevState => ({
            CIT2013: !prevState.CIT2013
        }))
    }
    onChange43 = (e) => {
        this.setState(prevState => ({
            CIT2207: !prevState.CIT2207
        }))
    }
    onChange44 = (e) => {
        this.setState(prevState => ({
            CITOPTINF1: !prevState.CITOPTINF1
        }))
    }
    onChange45 = (e) => {
        this.setState(prevState => ({
            CIT3100: !prevState.CIT3100
        }))
    }
    onChange46 = (e) => {
        this.setState(prevState => ({
            CITOPTTEL1: !prevState.CITOPTTEL1
        }))
    }
    onChange47 = (e) => {
        this.setState(prevState => ({
            CIT3000: !prevState.CIT3000
        }))
    }
    onChange48 = (e) => {
        this.setState(prevState => ({
            CIT3202: !prevState.CIT3202
        }))
    }
    onChange49 = (e) => {
        this.setState(prevState => ({
            CITOPTINF2: !prevState.CITOPTINF2
        }))
    }

    onChange50 = (e) => {
        this.setState(prevState => ({
            CITOPTTEL2: !prevState.CITOPTTEL2
        }))
    }
    onChange51 = (e) => {
        this.setState(prevState => ({
            CITOPTTEL3: !prevState.CITOPTTEL3
        }))
    }
    onChange52 = (e) => {
        this.setState(prevState => ({
            CITOPTINF3: !prevState.CITOPTINF3
        }))
    }
    onChange53 = (e) => {
        this.setState(prevState => ({
            CIT3203: !prevState.CIT3203
        }))
    }
    onChangePR1 = (e) => {
        this.setState(prevState => ({
            CIT4000: !prevState.CIT4000
        }))
    }
    onChangePR2 = (e) => {
        this.setState(prevState => ({
            CIT4001: !prevState.CIT4001
        }))
    }
}