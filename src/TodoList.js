import React, { Component } from 'react';
import ClassNames from 'classnames';
import Todo from './Todo';

class TodoList extends Component {
	render() {
		const {
			todos,
			editingId,
			deleteTodo,
			editTodo,
			saveTodo,
			cancelEdit,
			toggleTodo,
			toggleAll
		} = this.props;
			
		const todoList = todos.map(todo => (
			<Todo
				key={`todo#${todo.id}`}
				text={todo.text}
				isDone={todo.isDone}
				isEditing={todo.id === editingId}
				
				deleteTodo={() => deleteTodo(Todo.id)}
			    editTodo={()=> editTodo(todo.id)}
			    saveTodo={text => saveTodo(todo.id, text)}
			    cancel={cancelEdit}
			    toggleTodo={()=> toggleTodo(todo.id)}
			/>
		));
		return (
			<div className="todo-app__main">
				<ul className="todo-list">
					{todoList}
				</ul>
			</div>
		);
	}
}

export default TodoList;