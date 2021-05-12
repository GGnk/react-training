import * as React from "react";
import Header from '../../src/components/Header'
import Main from '../../src/components/Main'
import Footer from '../../src/components/Footer'
import MovieDetails from "../../src/components/MovieDetails";

const Film: React.FC = () => (
    <>
        <Header>
            <MovieDetails />
        </Header>
        <Main />
        <Footer />
    </>
)

export default Film;
