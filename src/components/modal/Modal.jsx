import React, { useState } from 'react';
import { useStyles } from '../todoItem/todoItemStyle';
import { editTodoTitle } from '../feature/todoSlice';
import { useDispatch } from 'react-redux';
export default function Modal({ title, id }) {
  const modalStyles = useStyles();
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();
  const handleText = (e) => {
    setEditText(e.target.value);
  };
  const sendEditText = () => {
    dispatch(editTodoTitle({ id, text: editText }));
  };

  return (
    <div className={modalStyles.modal}>
      <div>
        <input
          type="text"
          placeholder={title}
          onChange={handleText}
          value={editText}
          onDoubleClick={sendEditText}
        />
      </div>
    </div>
  );
}
