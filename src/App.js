import React, {Component} from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';


class App extends Component{
	constructor(){
		super();
		this.state = {
			todos: [
				
					{
						id: 1,
						text: 'text1111',
						isDone : false
					},{
						id: 2,
						text: 'text2222',
						isDone : false
					},{
						id: 3,
						text: 'text3333',
						isDone : true
					}	

				
			]
		};
		// this.addTodo = this.addTodo.bind(this);
		// 	<Header addTodo={this.addTodo.bind(this)} />
	}


	addTodo(text){
			this.setState({
				todos: [...this.state.todos, {

						id: Date.now(),
						text: text,
						isDone: false
					}
				]
			});
	}

	deleteTodo(id){
		// 새롭게 저장에서 사용.해야함 
		const newTodos = [ ...this.state.todos];
		const deleteIndex = this.state.todos.findIndex( todo => todo.id === id);
		
		newTodos.splice(deleteIndex, 1);
		this.setState({
			todos: newTodos
		});
	}


	render(){
		return(
			<div className="todo-app">
				<Header addTodo={ text => this.addTodo(text) } />
				<TodoList 
					todos={this.state.todos} 
					deleteTodo={ id => this.deleteTodo(id) }
				/>
				<Footer />
			</div>
		);
	}
}

export default App;