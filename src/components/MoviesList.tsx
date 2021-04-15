import React from "react";

import MovieCards from "./MovieCards";

const MoviesList: React.FC = () => {

    return (
        <div className='movies-list'>
            <MovieCards/>
        </div>
    );
}

export default MoviesList;