export interface Movie {
    id?: number | string
    title: string
    year: number | string
    genres: string[]
    ratings?: number[]
    contentRating?: string
    releaseDate: string
    storyline?: string
    actors?: string[]
    url?: string
    posterurl?: string
}

export type MoviesList = Movie[]
