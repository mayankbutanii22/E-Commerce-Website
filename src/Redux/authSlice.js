import { createSlice } from '@reduxjs/toolkit';


const initialState = {
user: null, 
};

const authSlice = createSlice({
name: 'auth',
initialState,
reducers: {
register(state, action) {
  state.user = {
    fullName: action.payload.fullName,
    username: action.payload.username,
    email: action.payload.email,
    contact: action.payload.contact,
  };
},
login(state, action) {
state.user = action.payload;
},
logout(state) {
state.user = null;
},
},
});


export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;