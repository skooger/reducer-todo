import React, { useState} from 'react';

const TodoForm = props => {
    
  const [todo,setTodo] = useState('');

  const handleChanges = e => {
      setTodo(e.target.value);
  }

  const handleSubmit = e => {
      e.preventDefault();
      props.addTodo(todo);
      setTodo('');
  }
    

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="todo"
                value={todo}
                onChange={handleChanges}
            />
            <button>Add</button>
        </form>
    </div>
    );
  };
  
  export default TodoForm;