import React, { useState } from 'react'
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';

const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
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
      <h1>¿Que vas a hacer hoy?📝</h1>
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