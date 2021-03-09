import React, { useState } from "react";
import MoviesErrorBoundary from "./MoviesErrorBoundary";
import MoviesList from './MoviesList'

const category = [
    'All', 'Documentary', 'Comedy', 'Horror', 'Crime'
]

const filters = [
    'release date', 'best rating'
]

const Main: React.FC = () => {
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
                <MoviesList />
            </MoviesErrorBoundary>
        </main>
    );
}

export default Main;