import rootReducer, {
    addMoviesState, addMovies, pushMovie,
    addMovie, setShowHeader, setOpenForm, setEditStatus,
} from '../store/reducers/movies';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'
import { movies } from '../assets/js/data';
import {IMoviesState} from "../assets/js/types";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
    data: [],
    total: 0,
    offset: 0,
    totalAmount: 0
} as IMoviesState;
describe('Reducers', () => {
    it('on addMoviesState', async () => {
        const store = mockStore(initialState)
        const state = store.dispatch(addMoviesState(movies));
        expect(state).toEqual({
            payload: movies,
            type: addMoviesState.type,
        });
    });

    it('on addMovies', async () => {
        const state = rootReducer(initialState, addMovies(movies)).movies;
        expect(state).toEqual({
            ...initialState,
            data: movies,
        });
    });

    it('on pushMovie', async () => {
        const state = rootReducer(initialState, pushMovie(movies[0])).movies;
        expect(state).toEqual({
            ...initialState,
            data: [movies[0]],
        });
    });

    const movieState = {
        data: {},
        isShowHeader: false,
        isOpenForm: false,
        isEdit: true
    }

    it('on addMovie', async () => {
        const state = rootReducer(movieState, addMovie(movies[0])).movie;
        expect(state).toEqual({
            ...movieState,
            data: movies[0],
        });
    });

    it('on setShowHeader', async () => {
        const state = rootReducer(movieState, setShowHeader(true)).movie;
        expect(state).toEqual({
            ...movieState,
            isShowHeader: true
        });
    });

    it('on setOpenForm', async () => {
        const state = rootReducer(movieState, setOpenForm(true)).movie;
        expect(state).toEqual({
            ...movieState,
            isOpenForm: true
        });
    });

    it('on setEditStatus', async () => {
        const state = rootReducer(movieState, setEditStatus(false)).movie;
        expect(state).toEqual({
            ...movieState,
            isEdit: false
        });
    });
});

