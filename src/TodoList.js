import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return(
            <div className="todo-app__main">
                <div className="toggle-all" />
                <ul className="todo-list">
                    {this.props.todos.map((todo,i)=> (
                        <Todo
                            key={`todo#${i}`}
                            id={todo.id}
                            text={todo.text}
                            isDone={todo.isDone}
                            deleteTodo={this.props.deleteTodo}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;
