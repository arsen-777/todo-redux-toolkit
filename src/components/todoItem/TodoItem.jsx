import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './todoItemStyle';
import { toggleStatus, deleteTodo, editTodoTitle } from '../feature/todoSlice';

import edit from '../../images/edit.svg';
import save from '../../images/save.svg';
import del from '../../images/delete.svg';

export default function TodoItem({ title, date, completed, id }) {
  const itemStyles = useStyles();
  const dispatch = useDispatch();
  const [titleStyle, setTitleStyle] = useState('');
  const [isEdit, setIsEdit] = useState(true);
  const [changedTitle, setChangedTitle] = useState();
  const { comp } = useSelector((state) => state.todos);
  const inputRef = useRef(null);

  const handleStatus = (id) => {
    dispatch(toggleStatus({ id }));
  };
  const removeTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  // const toggleModal = () => {
  //   setIsOpen(true);
  // };

  console.log(changedTitle);
  useEffect(() => {
    if (completed) setTitleStyle(itemStyles.title);
    else {
      setTitleStyle('');
    }
  }, [completed, itemStyles.title]);

  const handleEdit = () => {
    setIsEdit(false);
    if (isEdit) {
      inputRef.current.focus();
    }
  };

  const handleChangedText = (e) => {
    setChangedTitle(e.target.value);
  };

  const addNewTitle = (id) => {
    dispatch(editTodoTitle({ id, changedTitle }));
    setIsEdit(true);
    setChangedTitle('');
  };

  return (
    <>
      <div className={itemStyles.todoItem}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleStatus(id)}
        />
        <label className={titleStyle} htmlFor="">
          {title}
        </label>
        <input
          className={itemStyles.inp}
          onChange={(e) => handleChangedText(e)}
          ref={inputRef}
          type="text"
          readOnly={isEdit}
          value={changedTitle}
        />
        {isEdit && (
          <div className={itemStyles.edit} onClick={handleEdit}>
            <img src={edit} alt="" />
          </div>
        )}
        {!isEdit && (
          <div className={itemStyles.edit} onClick={() => addNewTitle(id)}>
            <img src={save} alt="" />
          </div>
        )}
        {comp && (
          <div onClick={() => removeTodo(id)} className={itemStyles.edit}>
            <img src={del} alt="" />
          </div>
        )}
      </div>
    </>
  );
}
