import React from "react";

const Header: React.FC = ({children}) => {
    return (
        <header className='header'>
            {children}
        </header>
    );
}

export default Header;
