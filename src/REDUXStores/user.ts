import { createSlice  } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
  }
//   const persistedReducer = persistReducer(persistConfig)
const userSlice = createSlice({
    name: "user",
    initialState: {
        value:{
            Username: "",
            Email: "",
            ForumsSubbedTo: [],
            IsUserLoggedin: false,
        }
    },
    reducers: {
        UserLoginSuccess: (state, action) => {
            state.value = action.payload;
        },
    }
});
export const { UserLoginSuccess } = userSlice.actions;
export default userSlice.reducer;