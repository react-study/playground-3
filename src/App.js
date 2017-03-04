import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const axi = axios.create({
  baseURL: 'http://localhost:2403/todos',
  timeout: 1000
})

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            editingId: null
        };
    }

    componentWillMount() {
        axi.get('/')
          .then( res => {
            this.setState({
              todos: res.data
            });
          });
    }

    addTodo(text) {
        axi.post('/', { text }).then( res => {
          this.setState({
              todos: [ ...this.state.todos, res.data]
          });
        });
    }

    deleteTodo(id) {
        axi.delete(`/${id}`).then(res => {
          const newTodos = [...this.state.todos];
          const deleteIndex = newTodos.findIndex(todo => todo.id === id);
          newTodos.splice(deleteIndex, 1);
          this.setState({
              todos: newTodos
          });
        });
    }
    deleteCompleted() {
        const axiosArray = this.state.todos.filter(v => v.isDone).map(v => axi.delete(`/${id}`));
        axios.all(axiosArray).then(res => {
          const newTodos = this.state.todos.filter(v => !v.isDone);
          this.setState({
              todos: newTodos
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
        axi.put(`/${id}`, { text: newText }).then(res => {
          const newTodos = [...this.state.todos];
          const editIndex = newTodos.findIndex(todo => todo.id === id);
          newTodos[editIndex] = res.data;
          this.setState({
              todos: newTodos,
              editingId: null
          });
        });
    }

    toggleTodo(id) {
        const newDone = !this.state.todos.find(v => v.id === id).isDone;
        axi.put(`/${id}`, { isDone: newDone }).then(res => {
          const newTodos = [...this.state.todos];
          const toggleIndex = newTodos.findIndex(todo => todo.id === id);
          newTodos[toggleIndex] = res.data;
          this.setState({
              todos: newTodos
          });
        })
    }

    toggleAll() {
        const newToggleAll = !this.state.todos.every(v => v.isDone);
        const axiosArrays = this.state.todos.map(v => axi.put(`/${v.id}`, { isDone: newToggleAll }));

        axios.all(axiosArrays).then(res => {
            this.setState({
              todos: res.map(v => v.data)
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
