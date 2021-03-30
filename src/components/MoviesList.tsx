import React, { Suspense } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { MoviesList } from '../assets/js/types'

import {selectEditStatus, 
        selectOpenForm, 
        setOpenForm} from "../store/reducers/movies"
import MovieCards from "./MovieCards";

const Modal = React.lazy(() => import('antd/lib/modal'))
const FormBlock = React.lazy(() => import('./blocks/FormBlock'))

const MoviesList: React.FC = () => {
    const isOpenForm = useSelector(selectOpenForm)
    const isEdit = useSelector(selectEditStatus)
    const dispatch = useDispatch()
    
    const closeFormModal = () => {
        dispatch(setOpenForm(false))
    }

    return (
        <div className='movies-list'>
            <MovieCards/>
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