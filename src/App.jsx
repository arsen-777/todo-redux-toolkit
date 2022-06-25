import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import {
  addNewTodo,
  changeActive,
  changeComp,
  changeAll,
} from '../src/components/feature/todoSlice';

function App() {
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  let { active, comp } = useSelector((state) => state.todos);

  const handleAction = () => {
    if (date !== undefined && text.trim().length) {
      dispatch(
        addNewTodo({
          id: Date.now(),
          title: text,
          date,
          completed: false,
          status: false,
        })
      );
      setText('');
    } else {
      setMessage('Please add date');
    }

    setDate('');
    setMessage('');
  };

  const handleActive = () => {
    dispatch(changeActive());
  };
  const handleComp = () => {
    dispatch(changeComp());
  };
  const handleAll = () => {
    dispatch(changeAll());
  };

  const style = {
    borderBottom: '2px solid blue',
  };
  return (
    <div className="main">
      <div className="container">
        <div
          style={!active && !comp ? style : { textDecoration: 'none' }}
          onClick={() => handleAll()}
        >
          All
        </div>
        <div
          style={active ? style : { textDecoration: 'none' }}
          onClick={() => handleActive()}
        >
          Active
        </div>
        <div
          style={comp ? style : { textDecoration: 'none' }}
          onClick={() => handleComp()}
        >
          Completed
        </div>
      </div>
      <TodoForm
        updateText={setText}
        updateDate={setDate}
        addTask={handleAction}
        date={date}
        text={text}
      />
      <TodoList message={message} />
    </div>
  );
}

export default App;
