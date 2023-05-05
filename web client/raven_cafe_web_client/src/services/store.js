
import { configureStore } from '@reduxjs/toolkit';
import navIndexReducer from './navIndexSlice';

export default configureStore({
  reducer: {
    navIndex: navIndexReducer
  }
});