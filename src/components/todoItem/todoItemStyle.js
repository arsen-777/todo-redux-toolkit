import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '26%',
    height: '35px',
    padding: '0 15px',
    margin: '8px 0',

    backgroundColor: 'lightcyan',
  },
  title: {
    textDecorationLine: 'line-through',
    textDecorationColor: 'blue',
  },
  inp: {
    width: '80px',
    height: '8px',
    padding: '6px 60px',
    outline: 'none',
    border: 'none',
    background: 'lightcyan',
    '&::placeholder': {
      color: 'red',
      fontSize: '18px',
      textAlign: 'center',
    },
  },

  edit: {
    width: '15px',
    height: '15px',
    cursor: 'pointer',
  },
  button: {},
});
