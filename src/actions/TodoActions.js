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
            });
        }
    },
    deleteCompleted(todos) {
        return dispatch => {
            const axiosArrays = todos.filter(v => v.isDone).map(v => axi.delete(`/${v.id}`));
            axios.all(axiosArrays).then(res => {
                dispatch({
                    type: 'DELETE_COMPLETED'
                });
            });
        }
    },
    editTodo(id) {
        return {
            type: 'EDIT_TODO',
            id
        };
    },
    cancelEdit() {
        return {
            type: 'CANCEL_EDIT'
        };
    },
    saveTodo(id, newText) {
        return dispatch => {
            axi.put(`/${id}`, {text: newText}).then(res => {
                dispatch({
                    type: 'SAVE_TODO',
                    id,
                    editedTodo: res.data
                });
            });
        }
    },
    toggleTodo(id, newDone) {
        return dispatch => {
            axi.put(`/${id}`, {isDone: newDone}).then(res => {
                dispatch({
                    type: 'TOGGLE_TODO',
                    id,
                    editedTodo: res.data
                });
            });

        }
    },
    toggleAll(todos) {
        return dispatch => {
            const newToggleAll = !this.state.todos.every(v => v.isDone);
            const axiosArrays = this.state.todos.map(v =>
                 axi.put(`/${v.id}`, {isDone: newToggleAll})
            );
            axios.all(axiosArrays).then(res => {
                dispatch({
                    type: 'TOGGLE_ALL',
                    newTodos: res.map(v => v.data)
                });
                this.setState({
                    todos: res.map(v => v.data)
                });
            });
        }
    }
}

export default TodoActions;
