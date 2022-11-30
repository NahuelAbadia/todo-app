import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm';
import { RiCloseCircleLine } from "react-icons/ri"
import { TiEdit } from "react-icons/ti"

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    });
  }

  if (edit.id) {
    localStorage.setItem('todo-edit', true)
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
        style={{ cursor: 'pointer' }}
      >
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          className='detele-icon'
          onClick={() => removeTodo(todo.id)}
        />
        <TiEdit
          className='edit-icon'
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  )).sort((a, b) => {
    if (a.key > b.key) {
      return -1;
    }
    if (a.key < b.key) {
      return 1;
    }
    // a must be equal to b
    return 0;
  })
}

export default Todo