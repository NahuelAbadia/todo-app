import React, { useState, useEffect } from 'react'
import './App.css';
import TodoList from './components/TodoList/TodoList';

const App = () => {

  // const [typography, setTypography] = useState(false)
  
  // const fontFamily = typography === true ? 'font-family-calibri' : 'font-family-default'

  // useEffect(() => {
  //   document.addEventListener('CHANGE_LETTER_TYPE', () => {
  //     setTypography(!typography)
  //   })
  // }, [typography])

  

  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
