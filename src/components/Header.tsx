import React from "react";
import Search from './blocks/Search'

const Header: React.FC = ({ children }) => {

    return (
        <header className='header'>
            <div className="blur">
                <div className="top">
                    { children }
                    <div className="btn">+ ADD MOVIE</div>
                </div>
                <Search />
            </div>
        </header>
    );
}

export default Header;