import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortMovies } from "../store/reducers/movies";
import ButtonsGenres from "./ButtonsGenres";
import Loader from "./Loader";
import MoviesErrorBoundary from "./MoviesErrorBoundary";
import MoviesList from './MoviesList'


const filters = [
    {
        key: 'date',
        value: 'release date'
    },
    {
        key: 'rating',
        value: 'best rating'
    }
]

const Main: React.FC = () => {
    const [select, setSelect] = useState(filters[0].value)
    const dispatch = useDispatch()
    
    const sort = (value) => dispatch(sortMovies(value))

    const listFilters = filters.map((filter) => {
        return <option 
                key={filter.key} 
                value={filter.value}
            >
                {filter.value.toUpperCase()}
            </option>
    })
    
    const handleSelect = ({ target }) => {
        const { value } = target
        setSelect(value)
        const filter = filters.find((item) => item.value == value)
        if(filter) sort(filter.key)
    }

    return (
        <main className='main'>
            <div className="category">
                <ButtonsGenres />
                <div className="filter">
                    <span>SORT BY</span>
                    <select className="select" value={select} onChange={handleSelect}>
                        {listFilters}
                    </select>
                </div>
            </div>
            <MoviesErrorBoundary>
                <MoviesList />
                <Loader />
            </MoviesErrorBoundary>
        </main>
    );
}

export default Main;