import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        const {
            todos,
            editingId,
            deleteTodo,
            editTodo,
            saveTodo,
            cancelEdit
        } = this.props;

        const todoList = todos.map(todo => (
            <Todo
                key={`todo#${todo.id}`}
                text={todo.text}
                isDone={todo.isDone}
                isEditing={todo.id === editingId}

                deleteTodo={() => deleteTodo(todo.id)}
                editTodo={() => editTodo(todo.id)}
                saveTodo={text => saveTodo(todo.id, text)}
                cancelEdit={cancelEdit}
            />
        ));
        return (
            <div className="todo-app__main">
                <div className="toggle-all" />
                <ul className="todo-list">
                    {todoList}
                </ul>
            </div>
        );
    }
}

export default TodoList;
