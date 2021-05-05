import { useLocation } from "react-router-dom";

export const genres = [
    "Action", "Comedy", "Crime",
    "Adventure", "Drama", "Fantasy",
    "Horror", "Romance", "Thriller",
    "Documentary", "Mystery"]

export const getImage = (url: string):Promise<string> => {
    return new Promise((resolve, reject) =>{
        const img = new Image();
        img.onload = function(){
            resolve(url);
        };
        img.onerror = function(){
            reject(url);
        };
        img.src = url;
    });
};

export const useQuery = () => new URLSearchParams(useLocation().search);
