import React, { useState } from "react";

import { Movie } from '../../assets/js/types'
import { genres } from '../../assets/js/utils'

type Form = {
    film: Movie,
    setShowModal: (arg: boolean) => void
}

const Form: React.FC<Form> = ({ film, setShowModal }) => {
    const [movie, setMovie] = useState<Movie>({...film})

    const handleGenres = (event: { target: { options: HTMLOptionsCollection } }) => {
        let options = [...event.target.options];
        const selectedOptions = options.filter(option => option.selected)
                                        .map((item: { value: string }) => item.value)
        
        setMovie({...movie, genres: selectedOptions })
    }  

    const genresSelect = genres.map((genre) => {
        return <option key={genre} value={genre}>{genre}</option>
    })

    const closeShowModal = () => {
        setShowModal(false)
    }
    
    return (
        <div  className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={closeShowModal}>&times;</span>
                    <h2>ADD MOVIE</h2>
                </div>
                <div className="modal-body">
                    <form className="form-modal">
                        <div className="coll">
                            <label htmlFor="title">Title</label>
                            <input 
                                type="text" 
                                name="title" 
                                placeholder="Title here"
                                value={movie?.title}
                                onChange={({ target }) => setMovie({...movie, title: target.value })}
                                required 
                            />
                        </div>
                        <div className="coll">
                            <label htmlFor="year">Release Date</label>
                            <input 
                                type="date" 
                                name="year" 
                                value={movie?.releaseDate} 
                                onChange={({ target }) => setMovie({...movie, releaseDate: target.value })}
                                required 
                            />
                        </div>
                        <div className="coll">
                            <label htmlFor="genre">Genre</label>
                            <select value={movie.genres} onChange={handleGenres} name="genre" multiple={true}>
                                {genresSelect} 
                            </select>
                        </div> 
                        <div className="coll">
                            <label htmlFor="url">Movie URL</label>
                            <input 
                                type="text" 
                                name="url" 
                                placeholder="Movie URL here" 
                                value={movie?.url}
                                onChange={({ target }) => setMovie({...movie, url: target.value })}
                                required 
                            />
                        </div>
                        <div className="coll">
                            <label htmlFor="overview">Story line</label>
                            <textarea 
                                name="overview" 
                                placeholder="Overview here"
                                value={movie?.storyline}
                                onChange={({ target }) => setMovie({...movie, storyline: target.value })}
                            ></textarea>
                        </div>
                        <div className="coll">
                            <div className="btn block-inline" onClick={() => setShowModal(false)}>Reset</div>
                            <div className="btn save block-inline" onClick={() => setShowModal(false)}>Save</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;