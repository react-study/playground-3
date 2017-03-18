import update from 'immutability-helper';

const initialState = {
    todos: [],
    editingId: null
};

const TodoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_TODOS': {
            return update(state, {
                todos: {
                    $set: action.todos
                }
            });
        }
        case 'ADD_TODO': {
            return update(state, {
                todos: {
                    $push: [ action.newTodo ]
                }
            });
        }
        case 'DELETE_TODO': {
            const deleteTodo = state.todos.findIndex(todo => todo.id === action.id);

            return update(state, {
                todos: {
                    $splice: [
                        [ deleteIndex, 1 ]
                    ]
                }
            });
        }
        case 'DELETE_COMPLETED': {
            return update(state, {
                todos: {
                    $apply: todos => todos.filter(
                        v => !v.isDone
                    )
                }
            });
        }
        case 'EDIT_TODO': {
            return update(state, {
                editingId: {
                    $set: action.id
                }
            });
        }
        case 'CANCEL_TODO': {
            return update(state, {
                editingId: {
                    $set: null
                }
            });
        }
        case 'SAVE_TODO': {
            const editIndex = state.todos.findIndex(todo => todo.id === action.id);

            return update(state, {
                editingId: {
                    todos: {
                        [editIndex]: {
                            $set: action.editedTodo
                        }
                    }
                },
                editingId: {
                    $set: null
                }
            });
        }
        case 'TOGGLE_TODO': {
            const toggleIndex = state.todos.findIndex(todo => todo.id === action.id);

            return update(state, {
                editingId: {
                    todos: {
                        [toggleIndex]: {
                            $set: action.editedTodo
                        }
                    }
                }
            });
        }
        case 'TOGGLE_ALL': {
            return update(state, {
                todos: {
                    $set: action.newTodos
                }
            });
        }
        default: return state;
    }
}
