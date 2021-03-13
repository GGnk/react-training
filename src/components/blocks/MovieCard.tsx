import React, { useState, Suspense, Dispatch, SetStateAction }  from "react";
import Modal from "./Modal"
import { Movie } from '../../assets/js/types';
const Form = React.lazy(() => import('./Form'));
const ModalDelete = React.lazy(() => import('./ModalDelete'));

type Props = {
    film: Movie,
    setMovieDetails: Dispatch<SetStateAction<Movie | null>>;
}

const MovieCard: React.FC<Props> = ({ film, setMovieDetails }) => {
    const [showModal, setShowModal] = useState(false);
    const [deleteModal, setDeleteShowModal] = useState(false);

    const modal = showModal && (
                                <Suspense fallback={<div>Загрузка...</div>}>
                                    <Modal>
                                        <Form film={film} setShowModal={setShowModal} />
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
            <img 
                src={film.posterurl} 
                alt={film.title} 
                width='320' 
                height='450' 
                onClick={() => setMovieDetails(film)}
            />
            <div className='title-year'>
                <span className='title'>{ film.title }</span>
                <span className='year'>{ film.year }</span>
            </div>
            <div className='genres'>{ film.genres.join(' & ') }</div>
            {modal}
            {deleteModalElement}
        </div>
    );
}

export default MovieCard;