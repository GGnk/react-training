import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchListMovies,
    selectEditStatus,
    isNotEmptyListMovies,
    selectOpenForm,
    setOpenForm,
    sortMovies
} from "../store/reducers/movies";
import ButtonsGenres from "./ButtonsGenres";
import Loader from "./Loader";
import MoviesErrorBoundary from "./MoviesErrorBoundary";
import MoviesList from './MoviesList'
import EmptyBlock from "./blocks/EmptyBlock";
import dynamic from "next/dynamic";

const Modal = dynamic(
    () => import("antd/lib/modal"),
    { loading: () => <div>Loading...</div> }
);
const FormBlock = dynamic(() => import("./blocks/FormBlock"));

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
    useEffect(() => {
        dispatch(fetchListMovies())
    }, [dispatch])

    const isOpenForm = useSelector(selectOpenForm)
    const isEdit = useSelector(selectEditStatus)
    const isNotEmptyList = useSelector(isNotEmptyListMovies)

    const closeFormModal = () => {
        dispatch(setOpenForm(false))
    }

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

    const listMovies = isNotEmptyList ? <MoviesList /> : <EmptyBlock />
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
                {listMovies}
                <Loader />
            </MoviesErrorBoundary>
            <Modal
                title={isEdit ? 'Edit' : 'Create' }
                className='modal'
                visible={isOpenForm}
                onCancel={closeFormModal}
                footer={null}
                destroyOnClose

            >
                <FormBlock />
            </Modal>
        </main>
    );
}

export default Main;
