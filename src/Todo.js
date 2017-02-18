import React, {Component} from 'react';

class Todo extends Component{

	componentDidUpdate(pervProps){
		if(this.props.isEditing && !pervProps.isEditing){
			this.textInput.focus();
			this.textInput.value= this.props.text;
		} 
	}

	handleKeyDown(e){
		// this.props.addTodo
		// 엔터를 눌렀을때 텍스트 내용이 있을때 -> this.props.addTodo
		// && 인풋창 지우기
		console.log('test')
		const text = e.target.value;
		if( !text || e.keyCode !== 13) return;
		this.props.saveTodo(text);
		e.target.value = '';
	}

	render(){
		const {
			text,
			isDone,
			isEditing,

			deleteTodo,
			editTodo,
			cancelEdit,
			toggleTodo
		} = this.props;

		return(
			<li className={[
							"todo-item",
							isEditing ? "editing" : "",
							isDone ? 'completed' : ""

							].join(' ')}>
				<div 
					className="toggle" 
					onClick={toggleTodo}
				/>
				<div className="todo-item__view">
					<div
						className="todo-item__view__text"
						onDoubleClick={editTodo}
					>{text}</div>
					<button
						className="todo-item__destroy"
						onClick={ deleteTodo }
					/>

				</div>
				<input
					type="text"
					ref={ ref=> {this.textInput =ref; }}
					className="todo-item__edit"
					onKeyDown ={e => this.handleKeyDown(e)}

					onBlur={cancelEdit}
				/>

			</li>
		);
	}
}

export default Todo;
