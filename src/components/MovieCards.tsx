import React from "react";
import MovieCard from './blocks/MovieCard'
import { Movie } from '../assets/js/types'
import { selectMovies } from "../store/reducers/movies"
import { useSelector } from "react-redux";

const MovieCards: React.FC = () => {
    const films = useSelector(selectMovies)
    
    return (
        <>
            {films.map((film: Movie) => {
                return <MovieCard key={film.id} film={film} />
            })}
        </>
    )
}

export default MovieCards;