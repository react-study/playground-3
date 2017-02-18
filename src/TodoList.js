import React from 'react';
import Todo from './Todo';
import ClassNames from 'classnames';

class TodoList extends React.Component {
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

        return(
            <div className="todo-app__main">
                <div
                    className={[
                        "toggle-all",
                        todos.every(v => v.isDone) ? 'checked' : ''
                    ].join(' ')}
                    onClick={toggleAll}
                />
                <ul className="todo-list">
                    {this.props.todos.map((todo,i)=> (
                        <Todo
                            key={`todo#${i}`}
                            id={todo.id}
                            text={todo.text}
                            isDone={todo.isDone}
                            isEditing={todo.id === editingId}
                            deleteTodo={this.props.deleteTodo}
                            editTodo={() => editTodo(todo.id)}
                            saveTodo={text => saveTodo(todo.id, text)}
                            cancelEdit={cancelEdit}
                            toggleTodo={() => toggleTodo(todo.id)}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;
