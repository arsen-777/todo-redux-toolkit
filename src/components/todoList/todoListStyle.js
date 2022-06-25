import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  btnRemove: {
    border: '1px solid ',
    padding: '6px 8px',
    outline: 'none',
    borderRadius: '8px',
    color: 'white',
    backgroundColor: 'red',
    cursor: 'pointer',
  },
  delBlock: {
    display: 'flex',
    justifyContent: 'end',
    width: '28%',
    marginRight: '4px',
  },
});
