import React from "react";
import {Route, Switch} from "react-router-dom";
import MovieDetails from "./MovieDetails";
import HeaderComponent from "./HeaderComponent";

const Header: React.FC = () => {
    return (
        <header className='header'>
            <Switch>
                <Route path='/film/:id'>
                    <MovieDetails />
                </Route>
                <Route exact path={['/', '/search']}>
                    <HeaderComponent />
                </Route>
            </Switch>
        </header>
    );
}

export default Header;
