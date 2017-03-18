import axios from 'axios';
const axi = axios.create({
    baseURL: 'http://localhost:2403/todos',
    timeout: 1000
});

// App WillMount
// 1 TodoActions.getTodos() => return값
// 2 dispatch(return 값)
// thunk middleware : dispatch

const TodoActions ={
  getTodos(){
    return dispatch =>{
      axi.get('/').then(res => {
        dispatch({
          type: 'GET_TODOS',
          todos : res.data
        });
      });
    };
  },

  addTodo(text) {
    return dispatch =>{
      axi.post('/', { text }).then(res => {
        dispatch{
          type : 'ADD_TODO',
          newTodo : res.data
        });
      });
    };
  },

  deleteTodo(id) {
    return dispatch =>{
      axi.delete(`/${id}`).then(res => {
        dispatch({
          type: 'DELETE_TODO',
          id
        })
      });
    }

  },

  deleteCompleted() {
    return dispatch =>{
      const axiosArrays = this.state.todos.filter(v => v.isDone)
          .map(v => axi.delete(`/${v.id}`));
      axios.all(axiosArrays).then(res => {
        dispatch({
          type : 'DELETE_COMPLETED'
        })
      });
    }

  },

  editTodo(id) {
    return {
      type: 'EDIT_TODO',
      id
    }

  },

  cancelEdit() {
    return{
      type: 'CANCEL_EDIT',
    }

  },

  saveTodo(id, newText) {
    return dispatch =>{
      axi.put(`/${id}`, { text: newText }).then(res => {
        dispatch({
          type: 'SAVE_TODO',
          id,
          editedTodo : res.data
        })

      });
    }

  },

  toggleTodo(id, newDone) {
    return dispatch =>{
      axi.put(`/${id}`, { isDone: newDone }).then(res => {
        dispatch({
          type : 'TOGGLE_TODO',
          id,
          editedTodoL res.data

        })

      });
    }
      //const newDone = !this.state.todos.find(v => v.id === id).isDone;

  },

  toggleAll(todos) {
    return dispatch =>{
      const newToggleAll = !this.state.todos.every(v => v.isDone);
      const axiosArrays = this.state.todos.map(v =>
          axi.put(`/${v.id}`, { isDone: newToggleAll })
      );

      axios.all(axiosArrays).then(res => {
          dispatch({
            type: 'TOGGLE_ALL',
            newTodos: res.map(v => v.data)
          })
      });
    }
  }

}
