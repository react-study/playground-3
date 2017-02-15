import React, { Component } from 'react';

class Footer extends Component {
	render(){
		return(
			<div className="footer">
				<span className="todo-count">0 items left</span>
				<ul className="todo-filters">
					<li>
						<a href="#">All</a>
					</li>
					<li>
						<a href="#">Active</a>
					</li>
					<li>
						<a href="#">Completed</a>
					</li>
				</ul>
				<button className="todo-delete-completed">
					Clear Completed
				</button>
			</div>
		);
	}
}

export default Footer;