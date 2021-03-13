import React, { Dispatch, SetStateAction } from "react";
import './assets/scss/app.scss';
import { useMovieDetails } from './assets/js/hooks'
import { Movie } from './assets/js/types'

import Header from './components/Header'
import MovieDetails from './components/MovieDetails'
import Main from './components/Main'
import Footer from './components/Footer'

const App: React.FC = () => {
    const [showMovieDetails, getMovie, setMovie] = useMovieDetails();

    return (
        <div id="app">
            {showMovieDetails ? <MovieDetails movie={getMovie} setMovieDetails={setMovie} />: <Header />}
            <Main setMovie={setMovie} />
            <Footer />
        </div>
    )
}

export default App;