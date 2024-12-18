import {createSlice} from "@reduxjs/toolkit"

const initialState = []

const genresSlice = createSlice({
    name : "genres",
    initialState,
    reducers : {
        setGenres(state, action){
            return action.payload;
        },
        updateGenre(state, action) {
            const { id, name } = action.payload; // Extract id and name from the payload
            const index = state.findIndex((genre) => genre.id === id); // Find the genre by id
            if (index !== -1) {
              state[index].name = name; // Update the name of the genre
            }
        },
        removeGenre: (state, action) => {
            return state.filter((genre) => genre.id !== action.payload);
        },
    }
})

export const {setGenres, updateGenre, removeGenre} = genresSlice.actions;
export default genresSlice.reducer;