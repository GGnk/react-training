import React from "react";
import { Movie } from '../../assets/js/types'

const Search: React.FC<Movie> = ({ id, title, year, genres, posterurl }) => {

    return (
        <div className='movie-card'>
            <img src={posterurl} alt={title} width='320' height='450' />
            <div className='title-year'>
                <span className='title'>{ title }</span>
                <span className='year'>{ year }</span>
            </div>
            <div className='genres'>{ genres.join(' & ') }</div>
        </div>
    );
}

export default Search;