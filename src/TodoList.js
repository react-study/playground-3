import React, { Component } from 'react';
import Todo from './Todo';

/*const data = [
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
];*/

class TodoList extends Component {

	render(){
		//const todos = data.map( todo => (
		const todos = this.props.todos.map( todo => (
			<Todo
				key={`todo#${todo.id}`}
				text={todo.text}
				isDone={todo.isDone}
				deleteTodo={() => this.props.deleteTodo(todo.id)}
			/>
		));
		return(
			<div className="todo-app__main">
				<div className="toggle-all" />
				<ul className="todo-list">
					{todos}
				</ul>
			</div>
		);
	}
}

export default TodoList;