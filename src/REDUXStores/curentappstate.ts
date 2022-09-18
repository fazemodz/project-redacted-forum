import { createSlice } from '@reduxjs/toolkit';
const CurentAppStatus = createSlice({
    name: "curentappstatus",
    initialState: {
        value: {
            IsAppInMaintenanceMode: false,
            IsForumAPIInMaintenanceMode: false,
            IsUserAPIInMaintenanceMode: false,
        }
    },
    reducers: {
        SetCurentAppStatus: (state, action) => {
            state.value = action.payload;
        }
    }
});
export const { SetCurentAppStatus } = CurentAppStatus.actions;
export default CurentAppStatus.reducer;