import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import StarRatings from "react-star-ratings/build/star-ratings";

import {genreActions, movieActions} from "../../redux/slices";



const MoviesFilterGenres = () => {

    const {id} = useParams()
    console.log(id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getAllMovies(page))
        dispatch(genreActions.getAllGenres)
    }, [dispatch])

    const {movies, page} = useSelector(state => state.movies)
    const {genres} = useSelector(state => state.genres)


    return (
        <div>

            {movies && <div>{(movies.filter((movie) => movie.genre_ids.includes(+id))).map((el) =>

                <div>
                    <h1>Genre: {genres.filter(el => el.id===+id)[0].name}</h1>
                    <img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt={"img"}/>
                    <h1> {el.original_title}</h1>
                    <p>{el.overview}</p>
                    <h3>release date: {el.release_date}</h3>
                    <p>original language: {el.original_language}</p>
                    <p>rating: {el.vote_average}</p>
                    <StarRatings
                        rating={el.vote_average}
                        starRatedColor="orange"
                        numberOfStars={10}
                        starDimension="20px"
                    />
                </div>
            )}
            </div>}

        </div>
    );
};

export {MoviesFilterGenres};