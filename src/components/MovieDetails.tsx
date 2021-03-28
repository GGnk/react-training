import React, { useEffect, useState } from "react";
import Logo from './blocks/Logo';
import { useDispatch, useSelector } from "react-redux";
import { selectMovie, setShowHeader } from "../store/reducers/movies";
import Loader from "./Loader";
import { getImage } from "../assets/js/utils";


const MovieDetails: React.FC = () => {
    const movie = useSelector(selectMovie)
    const [img, setImg] = useState('') as any
    const dispatch = useDispatch()

    useEffect(() => {
        getImage(movie.poster_path)
            .then((url) => setImg(url))
            .catch((error) => setImg('https://via.placeholder.com/260x300/000000?text=Image+has+not+found'))
    })

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
                            <img src={img} height='300' />
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