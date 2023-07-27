// import { createSlice } from '@reduxjs/toolkit';

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState:
//   {
//     user:null,
//   },
//   reducers: {
//     setName: (state, action) => {
//       state.user = action.payload;
//     },
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//     setPassword: (state, action) => {
//       state.password = action.payload;
//     },
//   },
// });
// export const { setName, setEmail, setPassword } = authSlice.actions;
// export const selectUser =(state) => state.user.user;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice= createSlice({
    name:"user",
    initialState:{
        user:null,
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        },
    },
});
export const {login,logout}= userSlice.actions;
export const selectUser =(state) => state.user.user;
export default userSlice.reducer;

