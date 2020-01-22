import React from 'react';


const Todo = props => {
    console.log(props)
  return (
    <div
      className={`todo${props.todo.completed ? ' completed' : ''}`}
      onClick={e => {e.preventDefault(); props.toggleCompleted(props.todo.id)}}
    >
      <p>{props.todo.item}</p>
    </div>
  );
};

export default Todo;