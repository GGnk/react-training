import React, { useState, Suspense }  from "react";
import Modal from "./Modal"
import { Movie } from '../../assets/js/types';
const Form = React.lazy(() => import('./Form'));
const ModalDelete = React.lazy(() => import('./ModalDelete'));

const MovieCard: React.FC<Movie> = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [deleteModal, setDeleteShowModal] = useState(false);

    const modal = showModal && (
                                <Suspense fallback={<div>Загрузка...</div>}>
                                    <Modal>
                                        <Form film={props} setShowModal={setShowModal} />
                                    </Modal>
                                </Suspense>
                            )
    const deleteModalElement = deleteModal && (
                                <Suspense fallback={<div>Загрузка...</div>}>
                                    <Modal>
                                        <ModalDelete setShowModal={setDeleteShowModal} />
                                    </Modal>
                                </Suspense>
                            )
    return (
        <div className='movie-card'>
            <div 
                className="btn edit"
            >
                &#8942;
                <ul className="dropdown">
                    <li onClick={() => setShowModal(true)}>Edit</li>
                    <li onClick={() => setDeleteShowModal(true)}>Delete</li>
                </ul>
            </div>
            <img src={props.posterurl} alt={props.title} width='320' height='450' />
            <div className='title-year'>
                <span className='title'>{ props.title }</span>
                <span className='year'>{ props.year }</span>
            </div>
            <div className='genres'>{ props.genres.join(' & ') }</div>
            {modal}
            {deleteModalElement}
        </div>
    );
}

export default MovieCard;