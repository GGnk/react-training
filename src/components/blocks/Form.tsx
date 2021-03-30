import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genres } from '../../assets/js/utils'
import { createMovie, selectEditStatus, selectMovie, setOpenForm, updateMovie } from "../../store/reducers/movies";


const Form: React.FC = () => {
    const [movie, setMovie] = useState(useSelector(selectMovie))
    const isEdit = useSelector(selectEditStatus)
    const dispatch = useDispatch()

    const setMovieByKey = (data: { key, value }) => {
        setMovie({...movie, [data.key]: data.value})
    }
    const handleGenres = (event: { target: { options: HTMLOptionsCollection } }) => {
        const options = [...event.target.options];
        const selectedOptions = options.filter(option => option.selected)
                                        .map((item: { value: string }) => item.value)
        
        setMovieByKey({key: 'genres', value: selectedOptions })
    }  

    const genresSelect = genres.map((genre) => {
        return <option key={genre} value={genre}>{genre}</option>
    })

    const closeShowModal = () => {
        dispatch(setOpenForm(false))
    }
    const create = () => {
        dispatch(createMovie())
    }
    const update = () => {
        dispatch(updateMovie())
    }
    return (
        <form className="form-modal">
            <div className="coll">
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="example: La La Land"
                    value={movie.title}
                    onChange={({ target }) => setMovieByKey({ key: 'title', value: target.value })}
                    required 
                />
            </div>
            <div className="coll">
                <label htmlFor="vote_average">Movie average raiting</label>
                <input 
                    type="text" 
                    name="vote_average" 
                    placeholder="example: 7.9"
                    value={movie?.vote_average} 
                    onChange={({ target }) => setMovieByKey({ key: 'vote_average', value: Number(target.value) })}
                />
            </div>
            <div className="coll">
                <label htmlFor="vote_count">Total count of votes for the movie</label>
                <input 
                    type="text" 
                    name="vote_count" 
                    value={movie?.vote_count} 
                    placeholder="example: 6782"
                    onChange={({ target }) => setMovieByKey({ key: 'vote_count', value: Number(target.value) })}
                />
            </div>
            <div className="coll">
                <label htmlFor="tagline">Movie tagline</label>
                <input 
                    type="text" 
                    name="tagline" 
                    value={movie?.tagline}
                    placeholder="example: Here's to the fools who dream."
                    onChange={({ target }) => setMovieByKey({ key: 'tagline', value: target.value })}
                />
            </div>
            <div className="coll">
                <label htmlFor="year">Release Date</label>
                <input 
                    type="date" 
                    name="year" 
                    value={movie?.release_date}
                    onChange={({ target }) => setMovieByKey({ key: 'release_date', value: target.value })}
                />
            </div>
            <div className="coll">
                <label htmlFor="poster_path">Url to the poster image</label>
                <input 
                    type="text" 
                    name="poster_path" 
                    placeholder="example: https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg" 
                    value={movie.poster_path}
                    onChange={({ target }) => setMovieByKey({ key: 'poster_path', value: target.value })}
                    required 
                />
            </div>
            <div className="coll">
                <label htmlFor="overview">Short description of the movie</label>
                <textarea 
                    name="overview" 
                    placeholder="example: Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart."
                    value={movie.overview}
                    required
                    onChange={({ target }) => setMovieByKey({ key: 'overview', value: target.value })}
                ></textarea>
            </div>
            <div className="coll">
                <label htmlFor="budget">Movie production budget</label>
                <input 
                    type="text" 
                    name="budget" 
                    placeholder="example: 30000000, minimum: 0" 
                    value={movie?.budget}
                    onChange={({ target }) => setMovieByKey({ key: 'budget', value: Number(target.value) })}
                />
            </div>
            <div className="coll">
                <label htmlFor="revenue">Movie revenue</label>
                <input 
                    type="text" 
                    name="revenue" 
                    placeholder="example: 445435700, minimum: 0" 
                    value={movie?.revenue}
                    onChange={({ target }) => setMovieByKey({ key: 'revenue', value: Number(target.value) })}
                />
            </div>
            <div className="coll">
                <label htmlFor="runtime">Movie duration time</label>
                <input 
                    type="text" 
                    name="runtime" 
                    placeholder="example: 128, minimum: 0" 
                    value={movie.runtime}
                    onChange={({ target }) => setMovieByKey({ key: 'runtime', value: Number(target.value) })}
                />
            </div>
            <div className="coll">
                <label htmlFor="genre">List of genres</label>
                <select value={movie.genres} onChange={handleGenres} name="genre" multiple={true}>
                    {genresSelect} 
                </select>
            </div> 
            <div className="coll">
                <div className="btn save block-inline" onClick={closeShowModal}>Close</div>
                <div className="btn block-inline" onClick={() => isEdit ? update : create}>{isEdit ? 'Save' : 'Add'}</div>
            </div>
        </form>
    )
}

export default Form;