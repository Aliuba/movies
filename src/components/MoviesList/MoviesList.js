import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions, movieActions} from "../../redux/slices";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MovieList.module.css'
import {useNavigate} from "react-router-dom";


const MoviesList = () => {

    let dispatch = useDispatch();


    const {movies, page}=useSelector(state => state.movies);
    console.log(movies, page)

    useEffect(()=>{
        dispatch(movieActions.getAllMovies({page}))
        dispatch(genreActions.getAllGenres())

    }, [page, dispatch]);

    const navigate=useNavigate()

    const onMovieClick = (movie) => {
        dispatch(movieActions.setSelectedMovie(movie))
        navigate(`/discover/movie/${movie.id}`)
    }

    return (
        <div className={css.MovieList}>
            <button disabled={!(page-1)} onClick={()=>dispatch(movieActions.setPage(page-1))}>prev</button>
            <button disabled={!(page+1)} onClick={()=>dispatch(movieActions.setPage(page+1))}>next</button>
            {movies&&
            <div className={css.MovieList}>
                {movies.map(movie=><div key={movie.id} className={css.itemMovieList}> <MoviesListCard onMovieClick={onMovieClick} movie={movie}/></div>)}
            </div>
            }

        </div>
    );
};

export {MoviesList};