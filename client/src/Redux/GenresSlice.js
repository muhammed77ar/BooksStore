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
    }
})

export const {setGenres, updateGenre} = genresSlice.actions;
export default genresSlice.reducer;