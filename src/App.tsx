import React, { Suspense } from "react";
import HeadeComponent from './components/Header'
import MovieDetails from './components/MovieDetails'
import Main from './components/Main'
import Footer from './components/Footer'
import { useSelector } from "react-redux";
import { selectShowHeader } from "./store/reducers/movies";
import { Layout } from "antd";

const { Header } = Layout;

const App: React.FC = () => {
    const showMovieDetails = useSelector(selectShowHeader)
    
    return (
        <Layout className="App">
            <Header className='header'>
                {showMovieDetails ? <MovieDetails />: <HeadeComponent />}
            </Header>
            <Main />
            <Footer />
        </Layout>
        
    )
}

export default App;