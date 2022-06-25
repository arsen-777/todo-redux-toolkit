import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';
import { deleteAllTask } from '../feature/todoSlice';
import { useStyles } from '../todoList/todoListStyle';

export default function TodoList({ message }) {
  const todos = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const { active, comp } = useSelector((state) => state.todos);
  const listStyles = useStyles();

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos));
  }, [todos]);

  const removeAllTasks = () => {
    dispatch(deleteAllTask());
  };

  return (
    <div>
      <p>{message}</p>
      {todos.map((todo) => {
        if (active && todo.completed === false) {
          return <TodoItem key={todo.id} {...todo} />;
        } else if (comp && todo.completed) {
          return <TodoItem key={todo.id} {...todo} />;
        } else if (!active && !comp) {
          return <TodoItem key={todo.id} {...todo} />;
        }
        return [];
      })}
      <div className={listStyles.delBlock}>
        {comp && (
          <button
            className={listStyles.btnRemove}
            onClick={() => removeAllTasks()}
          >
            Delete all
          </button>
        )}
      </div>
    </div>
  );
}
