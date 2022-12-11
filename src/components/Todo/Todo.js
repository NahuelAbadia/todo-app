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

  const getDate = (newDate) => {
    const date = newDate.split("T", 3)[0].split('"')[1].split('-').reverse().splice(0, 2).join('/')
    return date;
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
        <span className="date">{getDate(todo?.date)}</span>
        <RiCloseCircleLine
          className='delete-icon'
          onClick={() => removeTodo(todo.id)}
        />
        <TiEdit
          className='edit-icon'
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ))
}

export default Todo