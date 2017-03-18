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
            // this.setState({
            //     todos: [
            //         ...this.state.todos,
            //         res.data
            //     ]
            // });
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
            // const newTodos = [...this.state.todos];
            // const deleteIndex = newTodos.findIndex(todo => todo.id === id);
            // newTodos.splice(deleteIndex, 1);
            // this.setState({
            //     todos: newTodos
            // });
        }
        case 'DELETE_COMPLETED': {
            return update(state, {
                todos: {
                    $apply: todos => todos.filter(todo => !todo.isDone)
                }
            });
            // const newTodos = todos.filter(v => !v.isDone);
            // this.setState({
            //     todos: newTodos
            // });
        }
        case 'EDIT_TODO': {
            return update(state, {
                editingId: {
                    $set: action.id
                }
            });
            // this.setState({
            //     editingId: id
            // });
        }
        case 'CANCEL_EDIT': {
            return update(state, {
                editingId: {
                    $set: null
                }
            });
            // this.setState({
            //     editingId: null
            // });
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
            // const newTodos = [ ...this.state.todos ];
            // const editIndex = newTodos.findIndex(todo => todo.id === id);
            // newTodos[editIndex] = res.data;
            // this.setState({
            //     todos: newTodos,
            //     editingId: null
            // });
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
            // const newTodos = [ ...this.state.todos ];
            // const toggleIndex = newTodos.findIndex(todo => todo.id === id);
            // newTodos[toggleIndex] = res.data;
            // this.setState({
            //     todos: newTodos
            // });
        }
        case 'TOGGLE_ALL': {
            return update(state, {
                todos: {
                    $set: action.newTodos
                }
            });
            // const newToggleAll = !this.state.todos.every(v => v.isDone);
            // const axiosArrays = this.state.todos.map(v => axi.put(`/${id}`, { isDone: newToggleAll}));
            // axios.all(axiosArrays).then(res => {
            //     this.setState({
            //         todos: res.map(v => v.data)
            //     });
            // });
        }
        default: return state;
    }
}

export default TodoReducer;