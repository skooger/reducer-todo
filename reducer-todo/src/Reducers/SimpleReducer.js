export const initialState = {

  todoList:[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589

  }]
    

  };
  
  export const TodoReducer = (state, action) => {

    switch (action.type) {
      case 'ADD_TODO':
        const todo = {
          item: action.payload,
          completed: false,
          id: new Date()
        }
        return {
          ...state,
          todoList: [...state.todoList, todo]
          
        };
      case 'TOGGLE_COMPLETED':
        return {
          ...state,
          todoList: state.todoList.map(todo => {
            if(action.payload === todo.id){
              return {
                ...todo,
                completed: !todo.completed
              };
            }else {
              return todo;
            }
          })
        
        
        }
      case 'CLEAR_COMPLETED':
        return {
          ...state,
          todoList: state.todoList.filter(todo => {
            return !todo.completed;
          })
        }
      default:
        return state;
    }

  };