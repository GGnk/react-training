import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMovies, selectListGenres, sortMovies } from "../store/reducers/movies";
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
    const [select, setSelect] = useState('release date')
    const listGenres = useSelector(selectListGenres)
    const dispatch = useDispatch()

    const handlerFilmsForGenres = (genre: string) => dispatch(fetchListMovies({
        searchBy: 'genres', search: genre
    }))

    const handlerAllfilms = () => dispatch(fetchListMovies())

    const sort = (value) => dispatch(sortMovies(value))

    const listHtlmElementsGenres = listGenres.map((genre: string) => (
        <li key={genre}>
            <Button type='ghost' style={{
                color: 'white'
            }} onClick={() => handlerFilmsForGenres(genre)}>
                {genre}
            </Button>
        </li>
    ))

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
        const filter: any = filters.find((item) => item.value == value)
        sort(filter.key)
    }

    return (
        <main className='main'>
            <div className="category">
                <ul>
                    <li>
                        <Button type='ghost' style={{
                            color: 'white'
                        }} onClick={handlerAllfilms}>
                            All
                        </Button>
                    </li>
                    {listHtlmElementsGenres}
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
                <Loader />
            </MoviesErrorBoundary>
        </main>
    );
}

export default Main;