import React from 'react';
import Card from '../components/Card';
import { useEffect, useState, Fragment } from 'react';



const API = "http://www.omdbapi.com/?i=tt3896198&apikey=b4d0879d";
const List = () => {

    const [data, setData] = useState([]);
    const [pelicula, setPelicula] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`${API}&s=${pelicula == '' ? 'game' : pelicula}`)
            .then(res => res.json())
            .then(datos => {
                if (datos.Response === 'False') {
                    setError('No se encontraron resultados con tu busqueda')
                    return;
                }
                setData(datos.Search)
                setError('');
            })

    }, [pelicula])

    function handleSubmit(e) {
        e.preventDefault();
        //setPelicula(document.getElementById('buscador').value);
        if (!pelicula) {
            setError('Por favor ingresa el nombre una pelicula o serie');
            return;
        }
        //setError('');
        //setPelicula('');

    }
    return (
        <Fragment>
            <div className="row mb-3">
                <div className="col-12">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar"
                            onChange={e => setPelicula(e.target.value)}
                            autoFocus
                            id="buscador"
                            value={pelicula}
                        />
                        <small className="text-muted">Los nombres deben escribirse en su idioma original</small>
                    </form>
                    <p className="text-light">{error}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {
                        pelicula && !error ? <h2 className="lead">Resultados relacionados con la busqueda: <span className="font-weight-bold">{pelicula}</span></h2>
                            : ''
                    }
                </div>
                {
                    data.map(movie => {
                        return <Card movie={movie} key={movie.imdbID} />
                    })
                }
            </div>
        </Fragment>


    );
}

export default List;