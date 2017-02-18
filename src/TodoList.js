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

    const todoMap = this.props.todos.map( todo => (
      <Todo
        key={`todo#${todo.id}`}
        text={todo.text}
        isDone={todo.isDone}
        isEditing={todo.id == editingId}
        deleteTodo={() => deleteTodo(todo.id)}
        editTodo={() => editTodo(todo.id)}
        saveTodo={text => saveTodo(todo.id, text)}
        cancelEdit={cancelEdit}
        toggleTodo={() => toggleTodo(todo.id)}
      />
    ));

    return (
      <div className="todo-app__main">
        <div
            className={
              ClassNames('toggle-all', {
                'checked': todos.every( v => v.isDone )
              })
            }
            onClick={toggleAll}
        />
        <ul className="todo-list">
          {todoMap}
        </ul>
      </div>
    );
  }
}

export default TodoList;
