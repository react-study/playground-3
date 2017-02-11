import React, { Component } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
	constructor(){
		super();
		this.state = {
			todos : [
				{
					id     : 1,
					text   : 'chicken',
					isDone : false
				},{
					id     : 2,
					text   : 'pizza',
					isDone : false
				},{
					id     : 3,
					text   : 'pasta',
					isDone : true
				}
			]
		};
		// this.addTodo = this.addTodo.bind(this);  <- 성능에는 좋지만 협업에서는 좋지 않다
	}
	
	addTodo(text) {
		this.setState({
			todos : [...this.state.todos, {
				id : Date.now(),
				text : text,
				isDone : false
			}]
		});
	}
	deleteTodo(id) {
		const newTodos = [...this.state.todos];
		const deleteIndex = newTodos.findIndex(todo => todo.id === id);
		
		newTodos.splice(deleteIndex, 1);
		
		this.setState({todos : newTodos});
	}
	render() {
		return (
			<div className="todo-app">
				<Header
					addTodo = {text=> this.addTodo(text)}
				/>
				<TodoList
					todos = {this.state.todos}
					deleteTodo={id => this.deleteTodo(id)}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;