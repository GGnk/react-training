import React from "react";
import { NavLink } from "react-router-dom";

const Logo: React.FC = () => {
    return (
        <NavLink to='/'>
            <div className="logo">netflix<span>roulette</span></div>
        </NavLink>
    );
}

export default Logo;
