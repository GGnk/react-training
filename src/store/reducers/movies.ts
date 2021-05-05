import { createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit'
import Modal from 'antd/lib/modal'
import { AppThunk, RootState } from '..'
import http, { reqTimeDelayAndTrack } from '../../assets/js/http'
import { IFetchListMovies, IMoviesState, IMovieState, Movie, MoviesList } from '../../assets/js/types'

const movie = createSlice({
    name: 'movie',
    initialState: {
        data: {},
        isShowHeader: false,
        isOpenForm: false,
        isEdit: true
    } as IMovieState,
    reducers: {
        addMovie: (state, action: PayloadAction<Movie>):void => {
            state.data = action.payload
        },
        setShowHeader: (state, action: PayloadAction<boolean>): void => {
            state.isShowHeader = action.payload
        },
        setOpenForm: (state, action: PayloadAction<boolean>): void => {
            state.isOpenForm = action.payload
        },
        setEditStatus: (state, action: PayloadAction<boolean>): void => {
            state.isEdit = action.payload
        }
    }
})
const movies = createSlice({
    name: 'movies',
    initialState: {
        data: [],
        total: 0,
        offset: 0,
        totalAmount: 0
    } as IMoviesState,
    reducers: {
        addMoviesState: (state, action: PayloadAction<IMoviesState>): IMoviesState => {
            return action.payload
        },
        addMovies: (state, action: PayloadAction<MoviesList>): void => {
            state.data = action.payload
        },
        pushMovie: (state, action: PayloadAction<Movie>): void => {
            state.data.push(action.payload)
        },
        putMovie: (state, action): void => {
            const id = action.payload.id
            const index = state.data.findIndex((movie) => movie.id == id)

            if(index != -1) {
                state.data.splice(index, 1, action.payload)
            }
        },
        sortMovies: (state, action: PayloadAction<string>): void => {
            switch(action.payload) {
                case 'date':
                    const getTime = (date: Date) => {
                        return date != null ? new Date(date).getTime() : 0;
                    }
                    state.data.sort((a: any, b: any) => {
                        return getTime(b.release_date) - getTime(a.release_date);
                    })
                    break
                default:
                    state.data.sort((a: any, b: any) => {
                        return b.vote_average - a.vote_average;
                    })
                    break
            }

        }
    }
})
export const { addMoviesState, addMovies, pushMovie, putMovie, sortMovies  } = movies.actions
export const { addMovie, setShowHeader, setOpenForm, setEditStatus } = movie.actions

export const isNotEmptyListMovies = (state: RootState) => !!selectMovies(state).length
export const selectMovies = (state: RootState) => state.movies.data

export const selectMovie = (state: RootState) => state.movie.data
export const selectShowHeader = (state: RootState) => state.movie.isShowHeader
export const selectOpenForm = (state: RootState) => state.movie.isOpenForm
export const selectEditStatus = (state: RootState) => state.movie.isEdit

export const selectListGenres = (state: RootState) => {
    const listGenres = selectMovies(state).slice(0,2).map((movie: any) => {
        return movie.genres
    })
    return [...new Set(['Action', 'Fantasy', 'Romance'].concat(...listGenres))]
}

const rootReducer = combineReducers({
    movies: movies.reducer,
    movie: movie.reducer
})
export default rootReducer

// asyns actions

/**
 * Function gets movies list
 *
 * @param {object} [options]
 * @param {string} [options.limit='6']
 * @param {string} [options.sortBy]
 * @param {string} [options.sortOrder]
 * @param {string} [options.search]
 * @param {string} [options.searchBy=title || genres]
 * @param {[string]} [options.filter]
 * @param {string} [options.offset]
 * @example fetchListMovies()
 *
 * @public
 */
export const fetchListMovies = ({
    limit='6', sortBy='', sortOrder='', search='', searchBy='title', filter=[], offset=''
}:IFetchListMovies = {}):AppThunk<void> => async (dispatch) => {
    const url = `movies?limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}&searchBy=${searchBy}&filter=${filter.join(',')}&offset=${offset}`
    const response = await reqTimeDelayAndTrack(http.get(url))

    dispatch(addMoviesState(response.data))
    dispatch(sortMovies('date'))
}

export const getMovie = (id:number):AppThunk<void> => async (dispatch) => {
    dispatch(addMovie({} as Movie))
    dispatch(setShowHeader(true))

    const url = `movies/${id}`
    const response = await reqTimeDelayAndTrack(http.get(url), 1000, 'movie-details')

    if (!response.data) {
        dispatch(setShowHeader(false))
        return
    }
    dispatch(addMovie(response.data))
}

export const openForm = (action: string='create', id?: number):AppThunk<void> => async (dispatch, getState) => {
    dispatch(addMovie({} as Movie))
    switch(action) {
        case 'create':
            dispatch(setEditStatus(false))
            break
        case 'update':
            if(id) {
                const movie = getState().movies.data.find((film) => film.id == id)
                dispatch(setEditStatus(true))
                dispatch(addMovie(movie as Movie))
                break
            }
            return
        case 'delete':
            Modal.warning({
                title: "Delete",
                centered: true,
                visible: getState().movie.isDeleteModal,
                onOk: () => {
                    dispatch(deleteMovie(id as number))
                    return false
                },
                okCancel: true,
                content: 'Are you sure want to delete this movie?'
            })
            return
    }
    dispatch(setOpenForm(true))
}
export const createMovie = (movie):AppThunk<void> => async (dispatch) => {
    const response = await reqTimeDelayAndTrack(http.post('movies', movie), 1000)

    if (response.status == 201) {
        dispatch(pushMovie(response.data))
    }
    dispatch(setOpenForm(false))
    dispatch(addMovie({} as Movie))
}
export const updateMovie = (movie):AppThunk<void> => async (dispatch, getState) => {
    dispatch(addMovie(movie as Movie))
    const response = await reqTimeDelayAndTrack(
                                    http.put('movies', getState().movie.data),
                                    1000,
                                    `movie-id-${getState().movie.data.id}`
                                )

    if (response.status == 200) {
        dispatch(putMovie(response.data))
    }
    dispatch(setOpenForm(false))
}
export const deleteMovie = (id: number):AppThunk<void> => async (dispatch, getState) => {
    const url = `movies/${id}`
    const response = await reqTimeDelayAndTrack(http.delete(url), 1000, `movie-id-${id}`)
    if (response.status == 204) {
        const movies = getState().movies.data.filter((film: { id: number }) => film.id != id)
        dispatch(addMovies(movies))
        dispatch(addMovie({} as Movie))
    }
}
