import React, { useState, Suspense, SetStateAction, Dispatch } from "react";
import Logo from './blocks/Logo';
import { Movie } from '../assets/js/types'

type Props = {
    movie: Movie | null
    setMovieDetails: Dispatch<SetStateAction<Movie | null>>;
}

const MovieDetails: React.FC<Props> = ({ movie, setMovieDetails }) => {

    return (
        <header className='header'>
            <div className=' movie-details'>
                <div className="blur">
                    <div className="top">
                        <Logo />
                        <div className="btn icon" onClick={() => setMovieDetails(null)}>
                            &#128269;
                        </div>
                    </div>
                    <div className="content">
                        <img src={movie?.posterurl} height='300' />
                        <div>
                            <h1>{movie?.title} 
                                { movie?.contentRating && <span className='contentRating'>{movie?.contentRating}</span> }
                            </h1>
                            <div className='actors'>Actors: {movie?.actors?.join(', ')}</div>
                            <div className='year'>Date of creation: {movie?.releaseDate} </div>
                            <p className='storyline'>{movie?.storyline}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MovieDetails;