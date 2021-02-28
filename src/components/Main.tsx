import React from "react";
import MoviesErrorBoundary from "./MoviesErrorBoundary";
import MoviesList from './MoviesList'

const category = [
    'All', 'Documentary', 'Comedy', 'Horror', 'Crime'
]

const filters = [
    'release date', 'best rating'
]

const listCategory = category.map((cat: string) => <li key={cat}>{cat}</li>)

const listFilters = filters.map((filter: string, i) => {
    return <option key={i} value={filter}>{filter.toUpperCase()}</option>
})

const Main: React.FC = () => {

    return (
        <main className='main'>
            <div className="category">
                <ul>
                    {listCategory}
                </ul>
                <div className="filter">
                    <span>SORT BY</span>
                    <select className="select">
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