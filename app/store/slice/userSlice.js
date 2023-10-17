import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogin : false
}

const user = createSlice({
    name:"user",
    initialState,
    reducers:{
        fetchUser(){

        },
        loginUser(state){
            state.userLogin = true
        },
        logoutUser(state){
            state.userLogin = false
        },
    }
})


export default user.reducer
export const {loginUser, logoutUser} = user.actions