import React, {Component} from 'react';
import Todo from './Todo';


class TodoList extends Component{

	render(){
		const todos = this.props.todos.map(todo =>(
			<Todo 
				key={`todo#${todo.id}`}
				text={todo.text}
				isDone={todo.isDone}
				deleteTodo={ ()=> this.props.deleteTodo(todo.id)}
			/>
		));

		return(
			<div className ="todo-app__main">
				<div className="toggle-all" />
				<ul className="todo-list">
					{todos}
				</ul>
			</div>
		);
	}
}

export default TodoList;
