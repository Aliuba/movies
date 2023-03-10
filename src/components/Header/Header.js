import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";


import {movieActions} from "../../redux/slices";
import css from './Header.module.css'
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

    }


    const searchMovie = (query) => {
        dispatch(movieActions.searchMovieByTitle(query))

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