import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMovies, selectListGenres } from "../store/reducers/movies";


const ButtonsGenres: React.FC = () => {
    const listGenres = useSelector(selectListGenres)
    const dispatch = useDispatch()
    const handlerAllfilms = () => dispatch(fetchListMovies())

    const handlerFilmsForGenres = (genre: string) => dispatch(fetchListMovies({
        searchBy: 'genres', search: genre
    }))

    const listHtlmElementsGenres = listGenres.map((genre: string) => (
        <li key={genre}>
            <Button type='ghost' style={{
                color: 'white'
            }} onClick={() => handlerFilmsForGenres(genre)}>
                {genre}
            </Button>
        </li>
    ))
    return (
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
    );
}

export default ButtonsGenres;