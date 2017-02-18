import React, { Component } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    text: '치킨에 맥주',
                    isDone: false
                }, {
                    id: 2,
                    text: '삼겹살에 쏘주',
                    isDone: false
                }, {
                    id: 3,
                    text: '피자에 파스타',
                    isDone: true
                }
            ]
            editingId: null
        };
    }
    addTodo(text) {
        this.setState({
            todos: [ ...this.state.todos, {
                id: Date.now(),
                text: text,
                isDone: false
            }]
        });
    }
    deleteTodo(id) {
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(todo => todo.id === id);
        newTodos.splice(deleteIndex, 1);
        this.setState({
            todos: newTodos
        });
    }
    editTodo(id){
    	this.setState({
    		editingId: id
    	});
    }
    cancelEdit(){
    	this.setState({
    		editingId: null
    	});
    }
    saveTodo(id, newText){
    	const newTodos = [...this.state.todos];
    	const editIndex = newTodos.findIndex(todo => todo.id == id);
    	newTodos[editIndex].text =newTodos;
    	this.setState({
    		todos: newTodos,
    		editingId: null
    	});
    }

    render() {
    		const {
    			todos,
    			editingId,
    		}= this.state;
        return (
            <div className="todo-app">
                <Header
                    addTodo={text => this.addTodo(text)}
                />
                <TodoList
                    todos={this.state.todos}
                    editingId={editingId}
                    deleteTodo={id => this.deleteTodo(id)}
                    editTodo={id => this.editTodo(id)}
                    saveTodo={(id, newText) => this.saveTodo(id, newText)}
                    cancelEdit={() => cancelEdit()}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
