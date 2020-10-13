import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faUser } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const icono = <FontAwesomeIcon icon={faDesktop} />
    const iconoUser = <FontAwesomeIcon icon={faUser} />
    const estilo= {
        //flex: "0 0 auto"
    }
    return (
        <footer className="container-fluid bg-light" style={estilo}>
            <div className="row">
                <div className="col 12 p-3">
                    <div className="d-flex justify-content-around">
                        <p className="text-dark lead">Desarrollado por: {iconoUser} Edwin Morales</p>
                        <a href="https://edwinmhz.github.io/mi_portafolio/" className="text-decoration-none text-dark lead" target="_blank">{icono} Mi página</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;