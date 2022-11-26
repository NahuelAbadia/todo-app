import React, { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
  const [todo, setTodo] = useState()
  const [placeholder, setPlaceholder] = useState(false)

  const todoRef = useRef(null);

  useEffect(() => {
    todoRef.current.focus()
  });

  useEffect(() => {
    if(localStorage.getItem('todo-edit')){
      setPlaceholder(true);
      localStorage.removeItem('todo-edit');
    }
  }, [])

  const handleChange = e => {
    setTodo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: todo
    })

    setTodo('')
  }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='text'
        value={todo}
        placeholder={placeholder !== true ? 'Agregá una tarea :)' : 'Editá tu tarea ;)'}
        className='todo-input'
        onChange={handleChange}
        ref={todoRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm