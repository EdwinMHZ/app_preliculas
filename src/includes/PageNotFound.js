import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const PageNotFound = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5 text-center">
                        <p className="display-2">Uppps!!</p>
                        <p className="display-3">404 Página no encontrada</p>
                        <img src="../../media/not_found.gif" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default PageNotFound;