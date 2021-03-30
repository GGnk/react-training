import React from "react";
import { Movie } from '../../assets/js/types';
import { useDispatch } from "react-redux";

import Loader from "./../Loader";
import { getMovie, openForm } from "../../store/reducers/movies";
import ImgProcessed from "./ImgProcessed";

type Props = {
    film: Movie
}

const MovieCard: React.FC<Props> = ({ film }) => {
    const dispatch = useDispatch()

    const handlerUpdateMovie = (id: number) => dispatch(openForm('update', id))
    const handlerDeleteMovie = (id: number) => dispatch(openForm('delete', id))
    
    return (
        <div className='movie-card'>
            <Loader color='red' type='Watch' area={`movie-id-${film.id}`} width='320'/>
            <div 
                className="btn edit"
            >
                &#8942;
                <ul className="dropdown">
                    <li onClick={() => handlerUpdateMovie(film.id)}>Edit</li>
                    <li onClick={() => handlerDeleteMovie(film.id)}>Delete</li>
                </ul>
            </div>
            <div className='poster' onClick={() => dispatch(getMovie(film.id))}>
                <ImgProcessed 
                    poster={film.poster_path} 
                    width='320' 
                    height='450' 
                    alt={film.title} 
                />
            </div>
            <div className='title-year'>
                <span className='title'>{ film.title }</span>
                <span className='year'>{ film.release_date?.match(/[0-9]{4}/) }</span>
            </div>
            <div className='genres'>{ film.genres.join(' & ') }</div>
        </div>
    );
}

export default MovieCard;