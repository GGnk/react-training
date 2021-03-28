export interface Movie {
    id: number
    title: string
    tagline?: string //example: Here's to the fools who dream.
    vote_average?: number // Movie average raiting. example: 7.9
    vote_count?: number //Total count of votes for the movie. example: 6782
    release_date?: string //example: 2016-12-29
    poster_path: string //example: https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg
    overview: string
    budget?: number
    revenue?: number
    runtime: number
    genres: string[]
    [key: string]: any
    
}

export type MoviesList = Movie[]


export interface IFetchListMovies {
    limit?: string
    sortBy?: string
    sortOrder?: 'desc' | 'asc' | ''
    search?: string
    searchBy?: 'title' | 'genres' | ''
    filter?: string[]
    offset?: string
}

export interface IMoviesState {
    data: MoviesList,
    total: number,
    offset: number,
    totalAmount: number
}

export interface IMovieState {
    data: Movie,
    isShowHeader: boolean
    isOpenForm: boolean
    isDeleteModal: boolean
    isEdit: boolean
}
