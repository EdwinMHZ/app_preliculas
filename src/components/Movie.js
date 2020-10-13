import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState, Fragment } from 'react';
import Navbar from '../includes/Navbar'
import Footer from '../includes/Footer'

const Movie = () => {
    const { id } = useParams();
    const API = `http://www.omdbapi.com/?i=${id}&apikey=b4d0879d`;
    const [pelicula, setPelicula] = useState({});

    useEffect(() => {
        fetch(`${API}`)
            .then(res => res.json())
            .then(datos => setPelicula(datos))

    }, [])
    console.log(`pelis:${pelicula.Ratings}`)
    const estilo={
        flex: '1',
        height: '80vh'
    }
    return (
        <Fragment>
            <Navbar/>
            <div className="container" style={estilo}>
                <div className="row mt-5 mb-5">
                    <div className="col-md-5 text-center col-12">
                        <h1 className="text-center lead">{pelicula.Title}</h1>
                        <img src={pelicula.Poster} className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-12">
                        <p className="text-light">Año: {pelicula.Year}</p>
                        <p className="text-light">Fecha de estreno: {pelicula.Released}</p>
                        <p className="text-light">Clasificación: {pelicula.Rated}</p>
                        <p className="text-light">Duración: {pelicula.Runtime}</p>
                        <p className="text-light">Director: {pelicula.Director}</p>
                        <p className="text-light">Actores: {pelicula.Actors}</p>
                        {
                            pelicula.Ratings ?
                                pelicula.Ratings.map(rating => {
                                    return (
                                        <p className="text-light" key={rating.Source}>{rating.Source} : {rating.Value}</p>
                                    )
                                })
                                : ''
                        }
                        <Link to="/" className="btn btn-primary mb-5">Regresar</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>

    );
}

export default Movie;