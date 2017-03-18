import axios from 'axios';
const axi = axios.create({baseURL: 'http://localhost:2403/todos', timeout: 1000});

const TodoActions = {
    getTodos() {
        return dispatch => {
            axi.get('/').then(res => {
                dispatch({
                    type: 'GET_TODOS',
                    todos: res.data
                });
            });
        };
    },
    addTodo(text) {
        return dispatch => {
            axi.post('/', {text}).then(res => {
                dispatch({
                    type: 'ADD_TODO',
                    newTodo: res.data
                });
                // this.setState({
                //     todos: [
                //         ...this.state.todos,
                //         res.data
                //     ]
                // });
            });
        };
    },
    deleteTodo(id) {
        return dispatch => {
            axi.delete(`/${id}`).then(res => {
                dispatch({
                    type: 'DELETE_TODO',
                    id
                });
                // const newTodos = [...this.state.todos];
                // const deleteIndex = newTodos.findIndex(todo => todo.id === id);
                // newTodos
                // .splice(deleteIndex, 1);
                // this.setState({todos: newTodos});
            });
        }
    },
    deleteCompleted() {
        return dispatch => {

        }
        const axiosArrays = this.state.todos.filter(v => v.isDone).map(v => axi.delete(`/${v.id}`));
        axios.all(axiosArrays).then(res => {
            const newTodos = this.state.todos.filter(v => !v.isDone);
            this.setState({todos: newTodos});
        });
    },
    editTodo(id) {
        return {
            type: 'EDIT_TODO',
            id
        };
        // this.setState({editingId: id});
    },
    cancelEdit() {
        return {
            type: 'CANCEL_EDIT'
        };
        // this.setState({editingId: null});
    },
    saveTodo(id, newText) {
        return dispatch => {
            axi.put(`/${id}`, {text: newText}).then(res => {
                dispatch({
                    type: 'SAVE_TODO',
                    id,
                    editedTodo: res.data
                });
                // const newTodos = [...this.state.todos];
                // const editIndex = newTodos.findIndex(todo => todo.id === id);
                // newTodos[editIndex] = res.data;
                // this.setState({todos: newTodos, editingId: null});
            });
        }
    },
    toggleTodo(id) {
        return dispatch => {
            // const newDone = !this.state.todos.find(v => v.id === id).isDone;
            axi.put(`/${id}`, {isDone: newDone}).then(res => {
                dispatch({
                    type: 'TOGGLE_TODO',
                    id,
                    editedTodo: res.data
                });
                // const newTodos = [...this.state.todos];
                // const toggleIndex = newTodos.findIndex(todo => todo.id === id);
                // newTodos[toggleIndex] = res.data;
                // this.setState({todos: newTodos});
            });

        }
    },
    toggleAll() {
        const newToggleAll = !this.state.todos.every(v => v.isDone);
        const axiosArrays = this.state.todos.map(v => axi.put(`/${v.id}`, {isDone: newToggleAll}));
        axios.all(axiosArrays).then(res => {
            this.setState({
                todos: res.map(v => v.data)
            });
        });
    }
}

export default TodoActions;
