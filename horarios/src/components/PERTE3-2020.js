import React, { Component } from 'react'
import ARamo from './RamoP'
import Semestre from './Semestre'
import { Link } from 'react-router-dom';



export default class Malla2020Extra3 extends Component {

    state = {
        CBM1000: null, CBM1001: null, CBQ1000: null, CIT1000: null, FIC1000: null, CBM1002: null, CBM1003: null, CBF1000: null, CIT1010: null,
        CFG1: null, CBM1005: null, CBM1006: null, CBF1001: null, CIT2006: null, CIT2114: null, CIT2204: null, CIT2107: null, CBF1002: null, CIT2007: null,
        CIT2008: null, CIG1012: null, CII2750: null, CIT2108: null, CIT2205: null, CIT2009: null, CFG2: null, CIG1013: null, CII1000: null, CIT2109: null,
        CIT2110: null, CIT2010: null, CFG3: null, CIG1014: null, CIT2206: null, CIT2011: null, CIT2111: null, CIT2012: null, CFG4: null, CII2100: null,
        CIT2112: null, CIT2113: null, CIT2013: null, CIT2207: null, CITOPTINF1: null, CIT3100: null, CITOPTTEL1: null, CIT3000: null, CIT3202: null, CITOPTINF2: null,
        CITOPTTEL2: null, CITOPTTEL3: null, CITOPTINF3: null, CIT3203: null, CIT4000: null, CIT4001: null

    }

    componentDidMount = () => {
        for (let i = 0; i < this.props.ramos.length; i++) {
            const mov = i;
            const mov2 = this.props.ramos[mov].to_asignatura_real.codigo;
            this.setState({
                [mov2]: [this.props.ramos[mov].es, this.props.ramos[mov].ls, this.props.ramos[mov].ef, this.props.ramos[mov].lf, this.props.ramos[mov].holgura]
            })
        }
    }

    render() {
        return (



            <div className="container">
                <div className="row justify-content-around">
                    <div className="col col-md-1"> </div>
                    <Semestre semestre={"7"} />
                    <Semestre semestre={"8"} />
                    <div className="col col-md-1"> </div>
                </div>

                <br />



                <div className="row row-cols-10 align-items-start">
                    <div className="col col-md-1"> </div>
                    <ARamo codigo={"CIT2206"} ramo={"Gestión Org."} state={this.state.CIT2206} />
                    <ARamo codigo={"CII2100"} ramo={"Introducción a la Economía"} state={this.state.CII2100} />

                    <div className="col col-md-1"> </div>
                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>
                    <ARamo codigo={"CIT2011"} ramo={"Sistemas Distribuidos"} state={this.state.CIT2011} />
                    <ARamo codigo={"CIT2112"} ramo={"Tecnologías Inalámbricas"} state={this.state.CIT2112} />
                    <div className="col col-md-1"> </div>
                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1">
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020/DatosExtraM2020-2' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                        </Link>
                    </div>
                    <ARamo codigo={"CIT2111"} ramo={"Comunicacio- nes Digitales"} state={this.state.CIT2111} />
                    <ARamo codigo={"CIT2113"} ramo={"Criptografía y Seg. en Redes"} state={this.state.CIT2113} />
                    <div className="col col-md-1">
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020/DatosExtraM2020-4' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </Link>
                    </div>

                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>
                    <ARamo codigo={"CIT2012"} ramo={"Ingeniería de Software"} state={this.state.CIT2012} />
                    <ARamo codigo={"CIT2013"} ramo={"Inteligencia Artifical"} state={this.state.CIT2013} />
                    <div className="col col-md-1"> </div>
                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>
                    <ARamo codigo={"CFG4"} ramo={"Minor / CFG"} state={this.state.CFG4} />
                    <ARamo codigo={"CIT2207"} ramo={"Evaluación de Proy. TIC"} state={this.state.CIT2207} />
                    <div className="col col-md-1"> </div>

                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col">
                        <Link className="nav-link" to={{ pathname: '/users/usr/PERT' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="col"> </div>
                    <div className="col"> </div>


                </div>


            </div>


        )
    }
}