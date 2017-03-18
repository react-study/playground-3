import axios from 'axios';

const axi = axios.create({
    baseURL: 'http://localhost:2403/todos',
    timeout: 1000
});

/**
 * App.js componentWillMount 시점에서 () => dispatch(TodoActions.getTodos())
 * 1. TodoActions(getTodos())
 * 2. dispatch(리턴값:action)
 * => 동기적인 흐름
 */

/**
 * redux-thunk
 * thunk middleware : dispatch(function) => 함수안의 내용이 나중에 dispatch할 내용이 담겨 있으면 된다.
 * type function? object?
 * 객체대신에 함수도 처리해준다.
 * => 비동기적 흐름
 */

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
        // return {
        //     type: 'GET_TODOS',
        //     todos: res.data
        // }
    },
    addTodo(text) {
        return dispatch => {
            axi.post('/', { text }).then(res => {
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
            const axiosArrays = todos.filter(v => v.isDone)
                .map(v => axi.delete(`/${v.id}`));
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
        }
    },
    saveTodo(id, newText) {
        return dispatch =>  {
            axi.put(`/${id}`, { text: newText }).then(res => {
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
            // const newDone = !this.state.todos.find(v => v.id === id).isDone;
            axi.put(`/${id}`, { isDone: newDone }).then(res => {
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
            const newToggleAll = !todos.every(v => v.isDone);
            const axiosArrays = todos.map(v =>
                axi.put(`/${v.id}`, { isDone: newToggleAll})
            );
            axios.all(axiosArrays).then(res => {
                dispatch({
                    type: 'TOGGLE_ALL',
                    newTodos: res.map(v => v.data)
                });
            });
        }
    }
}

export default TodoActions;