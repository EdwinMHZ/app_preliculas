import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ movie }) => {
    const url= `movie/${movie.imdbID}`
    return (
        <div className="col-md-4 my-3">
            <div className="card">
                <Link to={url}><img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100" /></Link>
                <div className="card-body text-center">
                    <h4 className="card-title text-light">{movie.Title} {movie.Year}</h4>
                    <p className="card-text">{movie.Type == "movie" ? 'Pelicula' : 'Serie'}</p>
                </div>
            </div>
        </div>

    );
}

export default Card;