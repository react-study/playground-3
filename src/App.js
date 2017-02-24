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
					isDone: false
				}
			],
			editingId: null,
			filterName : 'All'
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
	
	deleteCompleted() {
		const newTodos = this.state.todos.filter(v => !v.isDone);
		
		this.setState({
			todos : newTodos
		})
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
		const newTodos = [...this.state.todos];
		const editIndex = newTodos.findIndex(todo => todo.id === id);
		newTodos[editIndex].text = newText;
		
		this.setState({
			todos: newTodos,
			editingId: null
		});
	}
	
	toggleTodo(id) {
		const newTodos = [...this.state.todos];
		const toggleIndex = newTodos.findIndex(todo => todo.id === id);
		newTodos[toggleIndex].isDone = !newTodos[toggleIndex].isDone;
		
		this.setState({
			todos: newTodos
		});
		
	}
	
	toggleAll(){
		const newToggleAll = this.state.todos.every(v => v.isDone);
		const newTodos = this.state.todos.map(todo => {
			todo.isDone = newToggleAll;
			
			return todo;
		});
		
		this.setState({
			todos : newTodos
		})
	}
	
	selectFilter(filter) {
		this.setState({
			filterName : filter
		});
	}
	
	render() {
		const {
			      todos,
			      editingId,
			      filterName
		      } = this.state;
		
		const activeLength = todos.filter(v => !v.isDone).length;
		const completeLength = todos.length - activeLength;
		
		const filteredTodos = (filterName === 'All')
			? todos
			: todos.filter(todo => (
				(filterName === 'Active' && !todo.isDone) ||
				(filterName === 'Completed' && todo.isDone)
			));
		
		return (
			<div className="todo-app">
				<Header
					isAllDone={todos.every(v => v.isDone)}
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
				    toggleAll={()=> this.toggleAll()}
				/>
				<Footer
					activeLength={activeLength}
				    completeLength={completeLength}
					filterName={filterName}
					deleteCompleted = {() => this.deleteCompleted}
					selectFilter={filter => this.selectFilter(filter)}
				/>
			</div>
		);
	}
}

export default App;