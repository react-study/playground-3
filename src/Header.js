import React, { Component } from 'react';

class Header extends Component {
	handleKeyDown(e){
		//this.props.addTodo
		//엔터를 눌렀을때, 텍스트내용이 있을 때
		// -> this.props.addTodo(텍스트내용) && 인풋창 지우기
		const text = e.target.value;
		/*if(text && e.keyCode === 13){
			this.props.addTodo(text);
			e.target.value = '';
		}*/
		if(!text || e.keyCode !== 13) return;
		this.props.addTodo(text);
		e.target.value = '';
	}
	render(){

		return(
			<header>
				<h1 className="todo-app__header">todos</h1>
				<input
					type="text"
					className="todo-app__new-todo"
					placeholder="What needs to be done?"
					onKeyDown={ e => this.handleKeyDown(e) }
				/>
			</header>
		);
	}
}

export default Header;