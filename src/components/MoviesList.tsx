import React, { Suspense } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { MoviesList, Movie } from '../assets/js/types'
import { selectMovies } from "../store/reducers/movies"
import {selectEditStatus, 
        selectOpenForm, 
        setOpenForm} from "../store/reducers/movies"
import MovieCard from './blocks/MovieCard'
const Modal = React.lazy(() => import('antd/lib/modal'))
const FormBlock = React.lazy(() => import('./blocks/FormBlock'))

const MoviesList: React.FC = () => {
    const films = useSelector(selectMovies)
    const isOpenForm = useSelector(selectOpenForm)
    const isEdit = useSelector(selectEditStatus)
    const dispatch = useDispatch()
    
    const closeFormModal = () => {
        dispatch(setOpenForm(false))
    }

    const list = films.map((film: Movie) => {
        return <MovieCard key={film.id} film={film} />
    })

    return (
        <div className='movies-list'>
            { list }
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
        </div>
    );
}

export default MoviesList;