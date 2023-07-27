import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user'

const store = configureStore({
  reducer: {
    user: userReducer,

  },
});

export default store;

// import {createSlice} from '@reduxjs/toolkit';

// export const store=createSlice({
//   name: 'user',
//   initialState:{value:{name:'guest'}},
//   reducers:{
//     login:(state,action)=>{
//       state.value=action.payload
//     }
//   }
// })
// export const {login}=store.actions;
// export default store.reducer;
