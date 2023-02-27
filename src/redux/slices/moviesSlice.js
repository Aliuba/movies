import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const getAllMovies = createAsyncThunk(
    "moviesSlice/getAllMovies",
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
);
const searchMovieByTitle = createAsyncThunk(
    "moviesSlice/searchMovieByTitle",
    async ({query}, thunkAPI) => {
        try {
            console.log(query)

            const {data} = await movieService.searchMovie(query)

            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
);

const initialState = {
    movies: [],
    moviesSearch: [],
    page: 1,
    errors: null,
    loading: null,
    selectedMovie: null
};

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {results} = action.payload
                state.movies = results
            })
            .addCase(searchMovieByTitle.fulfilled, (state, action) => {
                const {results} = action.payload
                state.moviesSearch=results
            })

})

const {reducer: movieReducer, actions: {setPage, setSelectedMovie}} = movieSlice;

const movieActions = {
    getAllMovies,
    setPage,
    setSelectedMovie,
    searchMovieByTitle

}

export {
    movieActions,
    movieReducer
}