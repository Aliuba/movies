import React, {useEffect, useState} from 'react';

import css from './Header.module.css'
import {Link, useNavigate} from "react-router-dom";
import {movieActions} from "../../redux/slices";
import {useDispatch, useSelector} from "react-redux";
import {SearchPage} from "../../pages";
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {

    const [query, setQuery] = useState('')
    const {moviesSearch} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(movieActions.searchMovieByTitle({query}))}, [ query])


    const handleChange = (value) => {
        setQuery(value)
        console.log(value, "value")
    }


    const searchMovie = (query) => {
        console.log(query, 'params')
        dispatch(movieActions.searchMovieByTitle(query))
        console.log(moviesSearch, 'mosearch')
        // navigate('/')
    }



    return (
        < div>
            <div className={css.Header}>
                <div>
                    <input type={"text"} placeholder={"type to search"}
                           onChange={e => handleChange(e.target.value)}/>
                    <button onClick={() => searchMovie({query})}> search film </button>
                </div>
                <div>
                    <Link to={'/discover/movie'}>Movies</Link>
                    <Link to={'/genre/movie/list'}>Genres</Link>
                </div>
                <div>
                    <UserInfo/>
                </div>
            </div>
            {/*{query && <div>{moviesSearch.name}</div>}*/}
            {/*{moviesSearch && <div>{moviesSearch.name}</div>}*/}
             <SearchPage moviesSearch={moviesSearch}/>

        </div>
    );
};

export {Header};