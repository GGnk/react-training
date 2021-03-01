import React from "react";
import Search from './blocks/Search'
import Logo from '../components/blocks/Logo'

const Header: React.FC = () => {

    return (
        <header className='header'>
            <div className="blur">
                <div className="top">
                    <Logo />
                    <div className="btn">+ ADD MOVIE</div>
                </div>
                <Search />
            </div>
        </header>
    );
}

export default Header;