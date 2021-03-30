import React from "react";
import Logo from './blocks/Logo';
import { useDispatch, useSelector } from "react-redux";
import { selectMovie, setShowHeader } from "../store/reducers/movies";
import Loader from "./Loader";
import ImgProcessed from "./blocks/ImgProcessed";

const MovieDetails: React.FC = () => {
    const movie = useSelector(selectMovie)
    const dispatch = useDispatch()
    
    const handlerShowHeader = () => dispatch(setShowHeader(false))

    return (
        <>
            <div className='movie-details'>
                <div className="blur">
                    <Loader type='Grid' area="movie-details" width='300' height='300'/>
                    <> 
                        <div className="top">
                            <Logo />
                            <div className="btn icon" onClick={handlerShowHeader}>
                                &#128269;
                            </div>
                        </div>
                        <div className="content">
                            <ImgProcessed poster={movie.poster_path} height='300' />
                            <div>
                                <h1>{movie.title} 
                                    { movie.vote_average && <span className='contentRating'>{movie?.vote_average}</span> }
                                </h1>
                                <div className='genres'>Actors: {movie.genres?.join(', ')}</div>
                                <div className='year'>Date of creation: {movie.release_date} </div>
                                <p className='overview'>{movie.overview}</p>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    );
}

export default MovieDetails;