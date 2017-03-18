import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';



const mapStateToProps = state => ({
    todos : state.todos,
    editingId : state.ditingId
});

const mapDispatchToProps = dispatch => ({
    getTodos : () => dispatch(TodoActions.getTodos()),
    addTodo : text => dispatch(TodoAction.addTodo(text)),
    deleteTodo : id => dispatch(TodoActions.deleteTodo(id)),
    editTodo : id => dispatch(TodoActions.editTodo(id)),
    deleteCompleted : todos => dispatch(TodoActions.deleteCompleted(todos)),
    cancelEdit : () => dispatch(TodoActions.cancelEdit()),
    saveTodo : (id, newText) => dispatch(TodoActions.saveTodo(id, newText)),
    toggleTodo : (id, newDone) => dispatch(TodoActions.toggleTodo(id, newDone)),
    toggleAll : todos => dispatch(TodoActions.toggleAll(todos))
});


class App extends Component {

    componentWillMount() {
        this.props.getTodos();
    }

    render() {
        const {
            todos,
            editingId,
            addTodo,
            deleteTodo,
            editTodo,
            deleteCompleted,
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
                    isAllDone={todos.every(v=> v.isDone)}
                    addTodo={addTodo}
                    toggleAll={()=> toggleAll(todos)}
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
                    deleteCompleted={()=> deleteCompleted(todos)}
                    selectFilter={selectFilter}
                />
            </div>
        );
    }
}

export default App;
