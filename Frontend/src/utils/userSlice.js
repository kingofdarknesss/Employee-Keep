import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    allUser: null,
  },
  reducers: {
    addAllUser: (state, action) => {
      state.allUser = action.payload;
    },
  },
});

export const { addAllUser } = userSlice.actions;
export default userSlice.reducer;
