import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    username: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.username = action.payload
        },
        clearUser: (state) => {
            state.username = ""
        }
    }
})

export const {addUser, clearUser} = userSlice.actions
export default userSlice.reducer