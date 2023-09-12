import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

const initialState = {
  email: '',
};

export const userEmailSlice = createSlice({
  name: 'userEmail',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetEmail: (state) => {
      state.email = '';
    },
  },
});

export const { setEmail, resetEmail } = userEmailSlice.actions;
export const selectUserEmail = (state: any) => state.userEmail.email;

export default userEmailSlice.reducer;
