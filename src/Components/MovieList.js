import React from 'react';
import MovieCard from './MovieCard.js';

const MovieList = (props) => {
    return(
        <div className="container">
            <div className="row">
                {props.movies.map((m, i) => <MovieCard key={i} movie={m} />)}
            </div>
        </div>
    );
};

export default MovieList;