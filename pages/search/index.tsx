import React, {useEffect} from 'react';
import {fetchListMovies} from "../../src/store/reducers/movies";
import Header from "../../src/components/Header";
import Main from "../../src/components/Main";
import Footer from "../../src/components/Footer";
import {useDispatch} from "react-redux";
import HeaderComponent from "../../src/components/HeaderComponent";


const SearchPage = ({ search }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if(search) {
            dispatch(fetchListMovies({search: search.query as string }))
        }
    }, [])
    return (
        <>
            <Header>
                <HeaderComponent />
            </Header>
            <Main />
            <Footer />
        </>
    );
};

export async function getServerSideProps(context) {
    const search = context.query;

    return {
        props: { search }
    }
}

export default SearchPage;
