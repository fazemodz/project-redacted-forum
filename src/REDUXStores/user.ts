import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        value:{
            Username: "",
            Email: "",
            ForumsSubbedTo: [],
        }
    },
    reducers: {
        UserLoginSuccess: (state, action) => {
            state.value = action.payload;
        },
    }
});
export const { UserLoginSuccess } = UserSlice.actions;
export default UserSlice.reducer;