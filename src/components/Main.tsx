import React, { Dispatch, SetStateAction, useState } from "react";
import { Movie } from "../assets/js/types";
import MoviesErrorBoundary from "./MoviesErrorBoundary";
import MoviesList from './MoviesList'

const category = [
    'All', 'Documentary', 'Comedy', 'Horror', 'Crime'
]

const filters = [
    'release date', 'best rating'
]

type Props = {
    setMovie: Dispatch<SetStateAction<Movie | null>>;
}

const Main: React.FC<Props> = ({ setMovie }) => {
    const [select, setSelect] = useState('release date')
    
    const listCategory = category.map((cat: string) => <li key={cat}>{cat}</li>)

    const listFilters = filters.map((filter: string) => {
        return <option key={filter} value={filter}>{filter.toUpperCase()}</option>
    })
    
    const handleSelect = ({ target }) => {
        const { value } = target
        setSelect(value)
    }
    return (
        <main className='main'>
            <div className="category">
                <ul>
                    {listCategory}
                </ul>
                <div className="filter">
                    <span>SORT BY</span>
                    <select className="select" value={select} onChange={handleSelect}>
                        {listFilters}
                    </select>
                </div>
            </div>
            <MoviesErrorBoundary>
                <MoviesList setMovie={ setMovie }/>
            </MoviesErrorBoundary>
        </main>
    );
}

export default Main;