import React from 'react';
import { useStyles } from '../todoForm/todoFormStyle';
export default function TodoForm({
  updateDate,
  updateText,
  addTask,
  date,
  text,
}) {
  const formStyles = useStyles();
  return (
    <div className={formStyles.formBlock}>
      <label htmlFor="">
        <input
          className={formStyles.inputs}
          type="text"
          onChange={(e) => updateText(e.target.value)}
          value={text}
        />
        <input
          className={formStyles.inputDate}
          type="date"
          onChange={(e) => updateDate(e.target.value)}
          value={date}
        />
        <button className={formStyles.button} onClick={addTask}>
          Add Task
        </button>
      </label>
    </div>
  );
}
