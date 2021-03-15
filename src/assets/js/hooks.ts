import React, { useState, useEffect, useCallback } from "react";
import { Movie } from './types'

export const useMovieDetails = (): [boolean, Movie | null, React.Dispatch<React.SetStateAction<Movie | null>>] => {
    const [showMovieDetails, setShowMovieDetails] = useState<boolean>(false);
    const [movie, setMovie] = useState<Movie | null>(null);

    const cacheSetMovie = useCallback((film) => setMovie(film), [movie])

    useEffect((): void => {
        setShowMovieDetails(!!movie)
    }, [movie])

    return [showMovieDetails, movie, cacheSetMovie]
}