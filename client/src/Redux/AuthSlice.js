import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated : !!localStorage.getItem("access_token"),
    accessToken : localStorage.getItem("access_token"),
    user : null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login(state, action){
            state.isAuthenticated = true;
            state.accessToken = action.payload;
            localStorage.setItem("access_token", action.payload);
        },
        logout(state){
            state.isAuthenticated = false;
            state.accessToken = null;
            localStorage.removeItem("access_token");
        },
        setUserInfo(state, action){
            state.user = action.payload;
        }
    }
})

export const {login, logout, setUserInfo} = authSlice.actions;
export default authSlice.reducer;