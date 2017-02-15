import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';


class App extends Component {
	constructor(){
		super();
		this.state = {
			todos: [
				{
					id: 1,
					text: '치맥',
					isDone: false
				}, {
					id: 2,
					text: '삼쏘',
					isDone: false
				}, {
					id: 3,
					text: '피파',
					isDone: true
				}
			]
		};
		//this.addTodo = this.addTodo.bind(this);//방법 2 : 협업이 어렵~
	}
	addTodo(text){
		this.setState({
			todos: [ ...this.state.todos, {
				id: Date.now(),
				text: text,
				isDone: false
			}]
		});
	}
	deleteTodo(id){
		const newTodos = [ ...this.state.todos ];
		const deleteIndex = newTodos.findIndex(todo => todo.id === id);
		newTodos.splice(deleteIndex, 1);
		this.setState({
			todos: newTodos
		});
	}
	render(){
		return(
			<div className="todo-app">
				<Header
					//addTodo={this.addTodo.bind(this)}//방법 1 : 항상 호출되기 때문에 비추
					addTodo={text => this.addTodo(text)}//방법 3 : 인자를 매치시켜줄 것

				/>
				<TodoList
					todos={this.state.todos}
					deleteTodo={id => this.deleteTodo(id)}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;