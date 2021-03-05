import React, { useState, Suspense } from "react";
import Search from './blocks/Search';
import Logo from '../components/blocks/Logo';
const Form = React.lazy(() => import('../components/blocks/Form'));

const movieEmpty = {
    title: '',
    year: '',
    genres: [],
    releaseDate: ''
}

const Header: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const modal = showModal 
                        && (
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <Form film={movieEmpty} setShowModal={setShowModal} />
                        </Suspense>)

    return (
        <header className='header'>
            <div className="blur">
                <div className="top">
                    <Logo />
                    <div className="btn" onClick={() => setShowModal(true)}>+ ADD MOVIE</div>
                </div>
                <Search />
            </div>
            {modal}
        </header>
    );
}

export default Header;