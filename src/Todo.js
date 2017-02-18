import React, { Component } from 'react';
import ClassNames from 'classnames';

class Todo extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isEditing: false
  //   };
  // }
  //
  // editTodo() {
  //   this.setState({
  //     isEditing: true
  //   });
  // }

  // componentDidUpdate(prevProps){
  //   if(this.props.isEditing && !prevProps.isEditing) {
  //     this.textInput.focus();
  //   }
  // }

  handleKeyDown(e){
      const text = e.target.value;
      if(!text || e.keyCode !== 13) return;
      this.props.saveTodo(text);
      e.target.value = "";
  }

  handleDoubleClick(e){
    this.textInput.value = this.props.text;
    this.textInput.focus();
    this.props.editTodo();
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

    return (
      <li className={
        ClassNames('todo-item', {
          'editing' : isEditing,
          'completed': isDone
        }) }
        >
        <div className="toggle"
            onClick={toggleTodo}
        />
        <div className="todo-item__view">
          <div className="todo-item__view__text"
                onDoubleClick={e => this.handleDoubleClick(e)}
          >{text}</div>
          <button
            className="todo-item__destroy"
            onClick={deleteTodo}>
            </button>
        </div>
        <input
          className="todo-item__edit"
          type="text"
          ref = { ref => {this.textInput = ref;} }
          onKeyDown={e => this.handleKeyDown(e)}
          onBlur={cancelEdit}
        />
      </li>
    );
  }
}

export default Todo;
