import React from 'react';
import Todo from './Todo';

// Additional Methods
// 1) deleteTodo
// 2) startEditTodo
// 3) saveTodo : with Enter
// 4) cancelEdit : when focus moved away from input without pressing enter for saving
// 5) toggleTodo :

class TodoList extends React.Component {

  render() {

    const todos = this.props.todos.map( todo => (
      <Todo
        key={`todo#${todo.id}`}
        text={todo.text}
        isDone={todo.isDone}
        deleteTodo={() => this.props.deleteTodo(todo.id)}
      />
    ));

    return (
      <div className="todo-app__main">
        <div className="toggle-all"/>
        <ul className="todo-list">
          {todos}
        </ul>
      </div>
    );
  }
}

export default TodoList;
