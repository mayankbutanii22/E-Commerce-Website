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
    updateProfile(state, action) {
      if (state.user) {
        state.user = {
          ...state.user,
          ...action.payload, 
        };
      }
    },
  },
});

export const { register, login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
