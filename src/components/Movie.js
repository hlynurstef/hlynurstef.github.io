import React from 'react';

const Movie = (props) => {
    return (
        <div className="movie__info">
            { 
                props.error && 
                <p className="movie__error">
                    {props.error}
                </p> 
            }
            { 
                props.title && props.year && 
                <p className="movie__key">Title: 
                    <span className="movie__value"> {props.title} ({props.year})</span>
                </p> 
            }
            { 
                props.poster && 
                <img src={props.poster} alt="poster" /> 
            }
            { 
                props.imdbRating && 
                <p className="movie__key">Rating: 
                    <span className="movie__value"> {props.imdbRating}</span>
                </p> 
            }
        </div>
    );
}

export default Movie;