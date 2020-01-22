import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted} />
      ))}
      
    </div>
  );
};

export default TodoList;