import React from 'react';

const MovieCard = (props) => {
    return(
        <div className="card bg-light" style={{width: "18rem", margin: 10, border: "1px solid #000"}}>
            <img src={props.movie.posterUrl} className="card-img-top pt-2" alt="..." style={{height: 400}}/>
            <div className="card-body">
                <h5 className="card-title">{props.movie.title}</h5>
                {props.movie.description && (<p className="card-text">{props.movie.description}</p>)}
                {props.movie.rating && (<h6 className="card-text">{props.movie.rating}</h6>)}
            </div>
        </div>
    );
};

export default MovieCard;