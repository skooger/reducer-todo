import React, { useReducer } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import {TodoReducer, initialState} from './Reducers/SimpleReducer';

function App() {

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addTodo = input => {
    dispatch({type: 'ADD_TODO', payload:input})
  }

  const toggleCompleted = id => {
    dispatch({type: 'TOGGLE_COMPLETED', payload:id})
  }

  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED'})
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div><TodoForm addTodo={addTodo} /> </div>
      <TodoList todos={state.todoList} 
                toggleCompleted={toggleCompleted} />
      <button className="clear-btn" onClick={clearCompleted}>
        Clear Completed
      </button>
     
    </div>
  );
}

export default App;
