import update from 'immutability-helper';

const initialState = {
    todos: [],
    editingId: null
};

/*
const TodoReducerObj = {
    GET_TODOS: (state, { todos }) => {
        return update(state, {
            todos: {
                $set: todos
            }
        });
    },
    ADD_TODO: (state, { newTodo }) => {
        return update(state, {
            todos: {
                $push: [ newTodo ]
            }
        });
    }...
};

const TodoReducer = (state = initialState, action) =>
    TodoReducerObj[action.type] ? TodoReducerObj[action.type](state, action) : state;
*/



const TodoReducer = (state = initialState, action) => {
    switch(action.type) {
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
            const deleteIndex = state.todos.findIndex(todo => todo.id === action.id);
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
                        todo => !todo.isDone
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
        case 'CANCEL_EDIT': {
            return update(state, {
                editingId: {
                    $set: null
                }
            });
        }
        case 'SAVE_TODO': {
            const editIndex = state.todos.findIndex(todo => todo.id === action.id);
            return update(state, {
                todos: {
                    [editIndex]: {
                        $set: action.editedTodo
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
                todos: {
                    [toggleIndex]: {
                        $set: action.editedTodo
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

export default TodoReducer;
