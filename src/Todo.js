import React, { Component } from 'react';
import ClassNames from 'classnames';

class Todo extends Component {
	componentDidUpdate(prevProps){  // <= 되도록이면 ref로 대체하는 것이 좋다.
		if(this.props.isEditing && !prevProps.isEditing) {
			this.textInput.focus();
			this.textInput.value = this.props.text;
		}
	}
	
	handleKeyDown(e) {
		const text = e.target.value;
		if (!text || e.keyCode !== 13) return;
		this.props.saveTodo(text);
		e.target.value = '';
	}
	render() {
		const {
			      text,
			      isDone,
			      isEditing,
			      deleteTodo,
			      editTodo,
			      cancelEdit,
			      toggleTodo
		      } = this.props;
		
		return (
			<li className={ClassNames('todo-item', {
				'editing' : isEditing,
				'completed' : isDone
			})}>
				
				<div className="toggle"
				     onClick={toggleTodo}
				/>
				<div className="todo-item__view">
					<div
						className="todo-item__view__text"
						onDoubleClick={editTodo}
					>{text}</div>
					<button
						className="todo-item__destroy"
						onClick={deleteTodo}
					/>
				</div>
				<input
					type="text"
					ref={ref => {
						this.textInput = ref;
					}}
					className="todo-item__edit"
					onKeyDown={e => this.handleKeyDown(e)}
					onBlur={cancelEdit}
				/>
			</li>
		);
	}
}

export default Todo;