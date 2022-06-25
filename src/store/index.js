import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/feature/todoSlice';
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
