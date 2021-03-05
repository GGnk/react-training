import React from "react";

const Search: React.FC = () => {
    const title = 'Find your movie';
    return (
        <div className='search'>
            <div className="title">{ title.toUpperCase() }</div>
            <div className="wrap">
                <input type="text" placeholder="What do you want to watch?" />
                <div className="btn search_but">SEARCH</div>
            </div>
        </div>
    );
}

export default Search;