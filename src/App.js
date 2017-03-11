import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';

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
        const tempId = Date.now();
        const prevTodos = this.state.todos;

        this.setState(
          update(this.state, {
            todos: {
              $push: [{
                id: tempId,
                text
              }]
            }
          }));

        axi.post('/', { text }).then( res => {
          const newTodos = [ ...this.state.todos ];
          const tempTodoIndex = this.state.todos.findIndex( v => v.id === tempId );

          this.setState(
            update(this.state, {
              todos: {
                $splice: [[
                  tempTodoIndex, 1, res.data
                ]]
              }
            })
          );

          // newTodos.splice(tempTodoIndex, 1, res.data);

          this.setState({
              todos: newTodos
          }).catch( err => {
            this.setState({
              todos: prevTodos
            })
          });
        });
    }

    deleteTodo(id) {
        const prevTodos = this.state.todos;

        // const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(todo => todo.id === id);
        const newTodos = update(prevTodos, {
          $splice: [[ deleteIndex, 1 ]]
        });

        // newTodos.splice(deleteIndex, 1);

        this.setState({
            todos: newTodos
        });

        axi.delete(`/${id}`).catch((err) => {
          this.setState({ todos: prevTodos });
        });
    }

    deleteCompleted() {
        const prevTodos = this.state.todos;
        const newTodos = update(prevTodos, {
          $apply: todos => todos.filter(v => !v.is)
        });

        this.setState({
          // todos: prevTodos.filter(v => !v.isDone)
          todos: newTodos
        });

        const axiosArray = this.state.todos.filter(v => v.isDone).map(v => axi.delete(`/${id}`));
        axios.all(axiosArray).catch(err => {
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

        const editIndex = newTodos.findIndex(todo => todo.id === id);
        // newTodos[editIndex].text = newText;  --

        const newTodos = update(prevTodos, {
          [editIndex]: {
            test: {
              $set: newText
            }
          }
        });

        // const newTodos = [...this.state.todos];
        // newTodos[editIndex] = Object.assign({}, newTodos[editIndex], {text: newText});

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
        const newDone = !this.state.todos.find(v => v.id === id).isDone;
        // const newTodos = [...prevTodos];
        const toggleIndex = newTodos.findIndex(todo => todo.id === id);
        const newTodos = update(prevTodos, {
          [toggleIndex]: {
            isDone: {
              $set: newDone
            }
          }
        });

        // newTodos[toggleIndex] = res.data;
        // newTodos[toggleIndex] = Object.assign({}, newTodos[toggleIndex], {
        //   isDone: newDone
        // })

        this.setState({
            todos: newTodos
        });

        axi.put(`/${id}`, { isDone: newDone }).catch((err) => {
          this.setState({
            todos: prevTodos
          });
        });
    }

    toggleAll() {
        const prevTodos = this.state.todos;
        const newToggleAll = !prevTodos.every(v => v.isDone);
        // const newTodos = update(prevTodos, {
        //   $apply: todos => todos.map(todo => {
        //     todo.isDone = newToggleAll;
        //     return todo;
        //   });
        // });
        const newTodos = update(prevTodos, {
          $apply: todos => todos.map(todo => update(todo, {
            isDone: {
              $set: newToggleAll
            }
          }));
        });

        // const newTodos = prevTodos.map(todo => Object.assign({}, todo, {
        //   isDone: newToggleAll
        // }));

        this.setState({
          todos: newTodos
        });

        const axiosArrays = this.state.todos.map(v => axi.put(`/${v.id}`, { isDone: newToggleAll }));

        axios.all(axiosArrays).catch((err) => {
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
