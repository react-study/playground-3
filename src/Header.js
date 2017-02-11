import React, {Component} from 'react';



class Header extends Component{
	handleKeyDown(e){
		// this.props.addTodo
		// 엔터를 눌렀을때 텍스트 내용이 있을때 -> this.props.addTodo 
		// && 인풋창 지우기 

		const text = e.target.value;
		if( !text || e.keyCode !== 13) return;
		this.props.addTodo(text);
		e.target.value = '';
	}

	render(){
		// this.
		return(

			<header>	
				<input 
					type="text"
					className ="todo-app__new-todo"
					placeholder="what needs to be done?"
					onKeyDown={ e => this.handleKeyDown(e) }
				/>
			</header>
		);
	}
}

export default Header;