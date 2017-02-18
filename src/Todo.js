import React, { Component } from 'react';

class Todo extends Component {
    componentDidUpdate(prevProps) {
        if(this.props.isEditing && !prevProps.isEditing) {
            this.textInput.focus();
            this.textInput.value = this.props.text;
        }
    }

    handleKeyDown(e) {
        const text = e.target.value;
        if(!text || e.keyCode !== 13) return;
        this.props.saveTodo(text);
        e.target.value = '';
    }

    render() {
        const {
            text,
            isDone,
            isEditing,
            deleteTodo,
            editTodo,
            cancelEdit
        } = this.props;

        return(
            <li className={[
                'todo-item',
                isEditing ? 'editing' : ''
            ].join(' ').trim()}>
                <div className="toggle" />
                <div className="todo-item__view">
                    <div
                        className="todo-item__view__text"
                        onDoubleClick={editTodo}
                    >{text}</div>
                    <button
                        className="todo-item__destroy"
                        onClick={deleteTodo}
                    />
                </div>
                <input
                    type="text"
                    ref={ref => { this.textInput = ref; }}
                    className="todo-item__edit"
                    onKeyDown={e => this.handleKeyDown(e)}
                    onBlur={cancelEdit}
                />
            </li>
        );
    }
}

export default Todo;