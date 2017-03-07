import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const axi = axios.create({
    baseURL: 'http://localhost:2403/todos/',
    timeout: 1000
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            editingId: null
        };
    }
    componentWillMount() {
        axi.get('/').then(res => {
            this.setState({
                todos: res.data
            });
        });
    }
    addTodo(text) {
        const tempId = Date.now();
        const prevTodos = this.state.todos;

        this.setState({
            todos: [ ...prevTodos, { id: tempId, text }]
        });

        axi.post('/', { text }).then(res => {
            const newTodos = [ ...this.state.todos ];
            const tempTodoIndex = newTodos.findIndex(todo => todo.id === tempId);

            newTodos.splice(tempTodoIndex, 1, res.data);

            this.setState({
                todos: newTodos
            });
        })
        .catch(err => {
            this.setState({
                todos: prevTodos
            });
        });
    }
    deleteTodo(id) {
        const prevTodos = this.state.todos;
        const deleteIndex = prevTodos.findIndex(todo => todo.id === id);

        const newTodos = [ ...prevTodos ];
        newTodos.splice(deleteIndex, 1);
        this.setState({
            todos: newTodos
        });

        axi.delete(`/${id}`).catch(err => {
            this.setState({
                todos: prevTodos
            });
        });
    }
    deleteCompleted() {
        const prevTodos = this.state.todos;
        this.setState({
            todos: prevTodos.filter(v => !v.isDone)
        });

        const axiosArrays = this.state.todos.filter(v => v.isDone)
            .map(v => axi.delete(`/${v.id}`));

        axios.all(axiosArrays).catch(err => {
            this.setState({
                todos: prevTodos
            });
        });
    }
    editTodo(id) {
        this.setState({
            editingId: id
        });
    }
    cancelEdit() {
        this.setState({
            editingId: null
        });
    }
    saveTodo(id, newText) {
        const prevTodos = this.state.todos;
        const editIndex = prevTodos.findIndex(todo => todo.id === id);

        const newTodos = [ ...prevTodos ];
        newTodos[editIndex] = Object.assign({}, newTodos[editIndex], {text: newText});

        this.setState({
            todos: newTodos,
            editingId: null
        });

        axi.put(`/${id}`, { text: newText }).catch(err => {
            this.setState({
                todos: prevTodos
            });
        });
    }
    toggleTodo(id) {
        const prevTodos = this.state.todos;
        const newTodos = [ ...prevTodos ];
        const toggleIndex = newTodos.findIndex(v => v.id === id);
        const newDone = !newTodos[toggleIndex].isDone;

        newTodos[toggleIndex] = Object.assign({}, newTodos[toggleIndex], {isDone: newDone});
        this.setState({
            todos: newTodos
        });

        axi.put(`/${id}`, { isDone: newDone }).catch(err => {
            this.setState({
                todos: prevTodos
            });
        });
    }
    toggleAll() {
        const prevTodos = this.state.todos;
        const newToggleAll = !prevTodos.every(v => v.isDone);
        const newTodos = prevTodos.map(todo => 
            Object.assign({}, todo, { isDone : newToggleAll })
        );

        this.setState({
            todos: newTodos
        });

        const axiosArrays = this.state.todos.map(v =>
            axi.put(`/${v.id}`, { isDone: newToggleAll })
        );

        axios.all(axiosArrays).catch(err => {
            this.setState({
                todos: prevTodos
            });
        });
    }

    render() {
        const {
            todos,
            editingId
        } = this.state;

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
                    addTodo={text => this.addTodo(text)}
                    toggleAll={() => this.toggleAll()}
                />
                <TodoList
                    todos={filteredTodos}
                    editingId={editingId}
                    deleteTodo={id => this.deleteTodo(id)}
                    editTodo={id => this.editTodo(id)}
                    saveTodo={(id, newText) => this.saveTodo(id, newText)}
                    cancelEdit={() => this.cancelEdit()}
                    toggleTodo={id => this.toggleTodo(id)}
                />
                <Footer
                    activeLength={activeLength}
                    completeLength={completeLength}
                    filterName={filterName}
                    deleteCompleted={() => this.deleteCompleted()}
                    selectFilter={filter => this.selectFilter(filter)}
                />
            </div>
        );
    }
}

export default App;
