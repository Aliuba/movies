import React from 'react';
import {useSelector} from "react-redux";
import Badge from "react-badges";
import {useNavigate} from "react-router-dom";

import css from "./MovieInfo.module.css"
import StarRatings from "react-star-ratings/build/star-ratings";




const MovieInfo = () => {

    const {genres} = useSelector(state => state.genres)

    const {selectedMovie} = useSelector(state => state.movies)
    const navigate = useNavigate()

    const {
        id,
        original_language,
        original_title,
        overview,
        poster_path,
        release_date,
        vote_average,
        genre_ids
    } = selectedMovie

    const movieGenresList = genre_ids.map((genreId) => genres.find((el) => el.id === genreId))
    console.log(movieGenresList)
    return (
        <div>
            {selectedMovie && <div className={css.info}>

                <div className={css.infoImg}>

                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={"img"}/>


                </div>

                {movieGenresList && <div >{movieGenresList.map(value =><div className={css.badge}><Badge ><p onClick ={()=> navigate(`/moviesFilterGenres/${value.id}`)}> {value.name}</p>  </Badge></div> )}</div>}

                <div>
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


            </div>}

        </div>
    );
};

export {MovieInfo};
