import React from 'react';

class Todo extends React.Component {
    render() {
        const {
            id,
            text,
            inDone,
            deleteTodo
        } = this.props;

        return(
            <li className="todo-item">
                <div className="toggle"></div>
                <div className="todo-item__view">
                    <div className="todo-item__view__text">{text}</div>
                    <button
                        className="todo-item__destroy"
                        onClick={()=> deleteTodo(id)}
                    />
                </div>
                <input type="text" className="todo-item__edit" />
            </li>
        )
    }
}

export default Todo;
