import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  message: '',
  error: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.message = 'Login successful!';
      state.error = '';
    },
    signupSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.message = 'Signup successful!';
      state.error = '';
    },
    authFailure: (state, action) => {
      state.message = '';
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.message = '';
      state.error = '';
    },
  },
});

export const { loginSuccess, signupSuccess, authFailure, logout } = authSlice.actions;

export default authSlice.reducer;
