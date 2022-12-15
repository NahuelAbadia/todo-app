import React, { useState, useEffect } from 'react'
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';
import { RxLetterCaseCapitalize } from "react-icons/rx";

const TodoList = () => {

  let arrayOfTodos = JSON.parse(localStorage.getItem('arrayOfTodos'));
  if (!arrayOfTodos) {
    arrayOfTodos = [];
  }

  const [todos, setTodos] = useState(arrayOfTodos);

  useEffect(() => {
    let arrayOfTodos = JSON.parse(localStorage.getItem('arrayOfTodos'));

    if (arrayOfTodos) {
      localStorage.setItem('arrayOfTodos', JSON.stringify(todos))
    } else {
      localStorage.setItem('arrayOfTodos', JSON.stringify([]));
    }
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    setTodos([todo, ...todos]);
  }

  const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      {/* <div style={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}> */}
      <h1>¿Que vas a hacer hoy?📝</h1>
      {/* <div className='letter-container' onClick={() => { document.dispatchEvent(new CustomEvent('CHANGE_LETTER_TYPE', {})) }}>
          <RxLetterCaseCapitalize className='letter-button' />
        </div> */}
      {/* </div> */}
      <TodoForm onSubmit={addTodo} />
      <div className="todo-container">
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  )
}

export default TodoList