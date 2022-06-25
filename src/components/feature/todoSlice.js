import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../helpers/getLocalStorage';
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: getLocalStorage(),
    active: false,
    comp: false,
  },
  reducers: {
    addNewTodo(state, action) {
      state.tasks.push(action.payload);
    },
    toggleStatus(state, action) {
      console.log(action);
      const todoCompleted = state.tasks.find((todo) => {
        return todo.id === action.payload.id;
      });
      todoCompleted.completed = !todoCompleted.completed;
    },
    deleteTodo(state, action) {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload.id);
    },

    editTodoTitle(state, action) {
      if (action.payload.changedTitle) {
        const editTodo = state.tasks.find(
          (todo) => todo.id === action.payload.id
        );
        editTodo.title = action.payload.changedTitle;
      }
    },
    changeActive(state, action) {
      state.active = true;
      state.comp = false;
    },
    changeComp(state, action) {
      state.comp = true;
      state.active = false;
    },
    changeAll(state) {
      state.comp = false;
      state.active = false;
    },
    deleteAllTask(state, action) {
      state.tasks = state.tasks.filter((todo) => !todo.completed);
    },
  },
});

export const {
  addNewTodo,
  toggleStatus,
  deleteTodo,
  editTodoTitle,
  changeActive,
  changeComp,
  changeAll,
  deleteAllTask,
} = todoSlice.actions;
export default todoSlice.reducer;
