import React from 'react';
import {useSelector} from "react-redux";
import StarRatings from "react-star-ratings/build/star-ratings";

const SearchPage = ({moviesSearch}) => {

    // const {movies} = useSelector(state => state.movies);
    //
    // const movieSearchInfo = movies.map((mov) => mov.find((el) => el.id === moviesSearch.id))
    // const {
    //
    //     original_language,
    //     original_title,
    //     overview,
    //     poster_path,
    //     release_date,
    //     vote_average,
    //
    // } = movieSearchInfo

    return (
            <div>
                {moviesSearch &&  <div>{moviesSearch.map((movie)=> <h1> {movie.name}--{movie.id}</h1>)}</div>}



                    {/*<img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={"img"}/>*/}
                    {/*<h1> {original_title}</h1>*/}
                    {/*<p>{overview}</p>*/}
                    {/*<h3>release date: {release_date}</h3>*/}
                    {/*<p>original language: {original_language}</p>*/}
                    {/*<p>rating: {vote_average}</p>*/}
                    {/*<StarRatings*/}
                    {/*    rating={vote_average}*/}
                    {/*    starRatedColor="orange"*/}
                    {/*    numberOfStars={10}*/}
                    {/*    starDimension="20px"*/}
                    {/*/>*/}
                </div>

    )
};

export {SearchPage};