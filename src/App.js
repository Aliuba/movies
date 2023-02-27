import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenreBadges, MovieInfo, MoviesFilterGenres} from "./components";
import {MoviesPage} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/discover/movie'} element={<MoviesPage/>}/> }
                <Route path={'/discover/movie/:id'} element={<MovieInfo/>}/>
                <Route path={'/genre/movie/list'} element={<GenreBadges/>}/> }
                <Route path={'/moviesFilterGenres/:id'} element={<MoviesFilterGenres/>}/>
            </Route>
        </Routes>
    );
}

export default App;
