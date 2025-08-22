import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
};

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser: (set, action) => {
            StaticRange.value = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;