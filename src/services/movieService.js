
import {urls} from "../configs";
import {apiService} from "./apiService";


const movieService={
    getAll: (page=1)=>apiService.get(urls.movies, {params:{page}}),
    getById: (id)=>apiService.get(`${urls.movies}/${id}`),
    searchMovie: (query)=>apiService.get(urls.moviesSearch, {params:{query}})
}

export {
    movieService
}