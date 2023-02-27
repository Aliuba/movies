import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux/slices";
import css from './GenreBadges.module.css'
import {useNavigate} from "react-router-dom";

const GenreBadges = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const {genres} = useSelector(state => state.genres)
    console.log(genres)

    useEffect(() => {
        dispatch(genreActions.getAllGenres())
    }, [ ])


    return (
        <div>
            {genres && <ul>{genres.map(genre=><li onClick={()=> navigate(`/moviesFilterGenres/${genre.id}`)}> {genre.name} <br/></li> )}</ul>}
        </div>
    );
};

export {GenreBadges};