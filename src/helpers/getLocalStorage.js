export const getLocalStorage = () => {
  let newTodos = localStorage.getItem('tasks');

  if (newTodos) {
    return JSON.parse(localStorage.getItem('tasks'));
  } else {
    return [];
  }
};
