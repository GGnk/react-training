import React, { useState } from "react";
import { movies } from '../assets/js/data'
import { MoviesList, Movie } from '../assets/js/types'

import MovieCard from './blocks/MovieCard'

const MoviesList: React.FC = () => {
    const [films, setFilms] = useState<MoviesList>(movies)

    const list = films.slice(0, 6).map((film: Movie) => {
        return <MovieCard key={film.id} {...film} />
    })

    return (
        <div className='movies-list'>
            { list }
        </div>
    );
}

export default MoviesList;