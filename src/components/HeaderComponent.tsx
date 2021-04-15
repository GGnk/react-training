import React from "react";
import Search from './blocks/Search';
import Logo from '../components/blocks/Logo';
import { useDispatch } from "react-redux";
import { openForm } from "../store/reducers/movies";

const HeaderComponent: React.FC = () => {
    const dispatch = useDispatch()

    const openCreateForm = () => dispatch(openForm())

    return (
        <div className="blur">
            <div className="top">
                <Logo />
                <div className="btn" onClick={openCreateForm}>+ ADD MOVIE</div>
            </div>
            <Search />
        </div>
    );
}

export default HeaderComponent;
