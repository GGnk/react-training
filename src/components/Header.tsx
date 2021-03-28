import React from "react";
import Search from './blocks/Search';
import Logo from '../components/blocks/Logo';
import { useDispatch } from "react-redux";
import { openFormForCreateOrUpdateOrDelete } from "../store/reducers/movies";

const Header: React.FC = () => {
    const dispatch = useDispatch()

    const openFormforCreate = () => dispatch(openFormForCreateOrUpdateOrDelete())

    return (
        <>
            <div className="blur">
                <div className="top">
                    <Logo />
                    <div className="btn" onClick={openFormforCreate}>+ ADD MOVIE</div>
                </div>
                <Search />
            </div>
        </>
    );
}

export default Header;