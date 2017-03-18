import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import TodoActions from '../actions/TodoActions';

const mapStateToProps = state => ({
    todos: state.todos,
    editingId: state.editingId
});

const mapDispatchToProps = dispatch => ({
    getTodos       : () => dispatch(TodoActions.getTodos()),
    addTodo        : text => dispatch(TodoActions.addTodo(text)),
    deleteTodo     : id => dispatch(TodoActions.deleteTodo(id)),
    deleteCompleted: todos => dispatch(TodoActions.deleteCompleted(todos)),
    editTodo       : id => dispatch(TodoActions.editTodo(id)),
    cancelEdit     : () => dispatch(TodoActions.cancelEdit()),
    saveTodo       : (id, newText) => dispatch(TodoActions.saveTodo(id, newText)),
    toggleTodo     : (id, newDone) => dispatch(TodoActions.toggleTodo(id, newDone)),
    toggleAll      : todos => dispatch(TodoActions.toggleAll(todos))
});

// this.state = {
//     todos: [],
//     editingId: null
// };

// addTodo(text) {
//     axi.post('/', { text}).then(res => {
//         this.setState({
//             todos: [ ...this.state.todos, res.data ]
//         })
//     })
// }
// deleteTodo(id) {
//     axi.delete(`/${id}`).then(res => {
//         const newTodos = [...this.state.todos];
//         const deleteIndex = newTodos.findIndex(todo => todo.id === id);
//         newTodos.splice(deleteIndex, 1);
//         this.setState({
//             todos: newTodos
//         });
//     });
// }
// deleteCompleted() {
//     const axiosArrays = this.state.todos.filter(v => v.isDone)
//         .map(v => axi.delete(`/${v.id}`));

//     axios.all(axiosArrays).then(res => {
//         const newTodos = this.state.todos.filter(v => !v.isDone);
//         this.setState({
//             todos: newTodos
//         });
//     });
// }
// editTodo(id) {
//     this.setState({
//         editingId: id
//     });
// }
// cancelEdit() {
//     this.setState({
//         editingId: null
//     });
// }
// saveTodo(id, newText) {
//     axi.put(`/${id}`, { text: newText }).then(res => {
//         const newTodos = [...this.state.todos];
//         const editIndex = newTodos.findIndex(todo => todo.id === id);
//         newTodos[editIndex] = res.data;
//         this.setState({
//             todos: newTodos,
//             editingId: null
//         });
//     });
// }
// toggleTodo(id) {
//     const newDone = !this.state.todos.find(v => v.id === id).isDone;
//     axi.put(`/${id}`, { isDone: newDone }).then(res => {
//         const newTodos = [...this.state.todos];
//         const toggleIndex = newTodos.findIndex(todo => todo.id === id);
//         newTodos[toggleIndex] = res.data;
//         this.setState({
//             todos: newTodos
//         });
//     })
// }
// toggleAll() {
//     const newToggleAll = !this.state.todos.every(v => v.isDone);
//     const axiosArrays = this.state.todos.map(v =>
//         axi.put(`/${v.id}`, { isDone: newToggleAll })
//     );

//     axios.all(axiosArrays).then( res => {
//         this.setState({
//             todos: res.map(v => v.data)
//         });
//     });
// }

class App extends Component {
    componentWillMount() {
        this.props.getTodos();
        
        // axi.get('/').then(res => {
        //     this.setState({
        //         todos: res.data
        //     });
        // })
    }

    render() {
        const {
            todos,
            editingId,
            addTodo,
            deleteTodo,
            deleteCompleted,
            editTodo,
            cancelEdit,
            saveTodo,
            toggleTodo,
            toggleAll
        } = this.props;

        const {
            routeParams: {
                filter: filterName
            }
        } = this.props;

        const activeLength = todos.filter(v => !v.isDone).length;
        const completeLength = todos.length - activeLength;

        const filteredTodos = !filterName
            ? todos
            : todos.filter(todo => (
                (filterName === 'active' && !todo.isDone) ||
                (filterName === 'completed' && todo.isDone)
            ));
        return (
            <div className="todo-app">
                <Header
                    isAllDone={todos.every(v => v.isDone)}
                    addTodo={addTodo}
                    toggleAll={() => toggleAll(todos)}
                />
                <TodoList
                    todos={filteredTodos}
                    editingId={editingId}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    saveTodo={saveTodo}
                    cancelEdit={cancelEdit}
                    toggleTodo={toggleTodo}
                />
                <Footer
                    activeLength={activeLength}
                    completeLength={completeLength}
                    filterName={filterName}
                    deleteCompleted={() => deleteCompleted(todos)}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
