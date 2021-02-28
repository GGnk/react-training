import React, { useState } from "react";
import data from '../assets/js/data.json'
import { MoviesList, Movie } from '../assets/js/types'

import MovieCard from './blocks/MovieCard'

const MoviesList: React.FC = () => {
    const [films, setFilms] = useState<MoviesList>(data)

    const first_6 = films.splice(0, 6);

    const list = first_6.map((film: Movie) => {
        return <MovieCard key={film.id} {...film} />
    })

    return (
        <div className='movies-list'>
            { list }
        </div>
    );
}

export default MoviesList;