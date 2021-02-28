import React from "react";
import { Movie } from '../../assets/js/types'

const Search: React.FC<Movie> = ({ id, title, year, genres, posterurl }) => {
    
    const listGenres = genres.map((item: string, i) => {
        const end = (genres.length - 1) == i
        return end ? item : `${item} & `
    })
    return (
        <div className='movie-card'>
            <img src={posterurl} alt={title} width='320' height='450' />
            <div className='title-year'>
                <span className='title'>{ title }</span>
                <span className='year'>{ year }</span>
            </div>
            <div className='genres'>{ listGenres }</div>
        </div>
    );
}

export default Search;