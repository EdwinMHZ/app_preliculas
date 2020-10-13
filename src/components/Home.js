import React,{Fragment} from 'react'
import List from '../containers/List';
import Navbar from '../includes/Navbar'
import Footer from '../includes/Footer'
const Home = () => {
    return ( 
        <Fragment>
            <Navbar/>
            <main className="">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-light text-center mt-4 mb-3">Busca información de tus series y peliculas favoritas</h3>
                        </div>
                    </div>
                    <List />
                </div>
            </main>
            <Footer/>
        </Fragment>
     );
}
 
export default Home;