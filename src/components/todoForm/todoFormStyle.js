import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  formBlock: {
    marginTop: '15px',
  },
  inputs: {
    border: '1px solid silver',
    outline: 'none',
    padding: '6.5px ',
    borderRadius: '8px',
  },
  inputDate: {
    border: '1px solid silver',
    outline: 'none',
    padding: '4.5px ',
    borderRadius: '8px',
    margin: ' 0 2px',
  },
  button: {
    border: '1px solid ',
    padding: '6px 8px',
    outline: 'none',
    borderRadius: '8px',
    color: 'white',
    backgroundColor: 'lightblue',
  },
});
