import update from 'immutability-helper';

const initialState ={
  todos: [],
  editingId : null
};

const TodoReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'GET_TODOS':{
      return update(state, {
        todos:{
          $set: action.todos
        }
      });
    }
    case 'ADD_TODO':{
      return update(state,{
        todos:{
          $push: [action.newTodo]
        }
      });
    }
    case 'DELETE_TODO':{
      return update(state, {
        todos: {
          $splice : [[
            state.todos.findIndex(todo => v. id === action.id),1]
            ]
        }
      })
    }
    case 'DELETE_COMPLETED':{
      return update(state,{
        todos:{
          $apply: todos => todos.filter(
            todos => !todos.isDone
          )
        }
      })
    }
    case 'EDIT_TODO':{
      return update(state,{
        editingId:{
          $set: action.id
        }
      })
    }
    case 'CANCEL_EDIT':{
      return update(state,{
        editingId:{
          $set:null
        }
      })
    }
    case 'SAVE_TODO':{
      const editIndex = state.todos.findIndex(todo => todo.id === action.id);
      return update(state,{
        todos:{
          [editIndex] : {
            $set : action.editedTodo
          }
        },
        editingId{
          $set: action.id
        }
      })
    }
    case 'TOGGLE_TODO':{
      const toggleIndex = state.todos.findIndex(todo => todo.id === action.id);
      return update(state, {
        todos: {
          [toggleIndex] : {
            $set : action.editedTodo
          }
        }
      });
    }
    case 'TOGGLE_ALL':{
      return update(state,{
        todos:{
          $set:action.newTodo
        }
      });
    }
    default: return state;
  }
}
export default TodoReducer;
