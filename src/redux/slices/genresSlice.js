import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genderService} from "../../services";


const getAllGenres = createAsyncThunk(
    "moviesSlice/getAllGenres",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genderService.getAllGenders()
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
);

const initialState = {
    genres: [],
    errors: null,
    loading: null,
    selectedGenre: null
};

const genreSlice= createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                const {genres}=action.payload
                state.genres = genres
            })
})
const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAllGenres,


}

export {
    genreActions,
    genreReducer

}