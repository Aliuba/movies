import React from 'react';
import css from './MovieListCard.module.css'

import StarRatings from "react-star-ratings/build/star-ratings";

const MoviesListCard = ({movie, onMovieClick}) => {

    const {id, original_language, original_title, overview, poster_path, release_date, vote_average}=movie

    return (

            <div className={css.movieCard} onClick={()=>onMovieClick(movie)}>
            <div  ><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={"img"}/></div>

                <h1> {original_title}</h1>


                <p>{overview}</p>
                <h3>release date: {release_date}</h3>
                <p>original language: {original_language}</p>
                <p>rating: {vote_average}</p>
                    <StarRatings
                        rating={vote_average}
                        starRatedColor="orange"
                        numberOfStars={10}
                        starDimension="20px"
                    />
            </div>
    )

};

export {MoviesListCard};