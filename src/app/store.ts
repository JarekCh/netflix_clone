import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice/userSlice';
import userEmailReducer from '../features/userEmailSlice/userEmailSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    userEmail: userEmailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
