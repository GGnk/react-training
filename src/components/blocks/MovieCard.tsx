import React, { useState, useEffect }  from "react";
import { Movie } from '../../assets/js/types';
import { useDispatch } from "react-redux";
import { getImage } from "../../assets/js/utils";

import Loader from "./../Loader";
import { getMovie, openFormForCreateOrUpdateOrDelete } from "../../store/reducers/movies";

type Props = {
    film: Movie
}

const MovieCard: React.FC<Props> = ({ film }) => {
    const [img, setImg] = useState('')
    const dispatch = useDispatch()
    
    useEffect(() => {
        getImage(film.poster_path)
            .then((url) => setImg(url))
            .catch(() => setImg('https://via.placeholder.com/320x450/000000?text=Image+has+not+found'))
    })

    const handlerUpdateMovie = (id: number) => dispatch(openFormForCreateOrUpdateOrDelete('update', id))
    const handlerDeleteMovie = (id: number) => dispatch(openFormForCreateOrUpdateOrDelete('delete', id))
    
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
                <img 
                    src={img} 
                    alt={film.title} 
                    width='320' 
                    height='450'
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