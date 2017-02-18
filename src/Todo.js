import React from 'react';
import ClassNames from 'classnames';

class Todo extends React.Component {
    componentDidUpdate(prevProps){
        if(this.props.isEditing && !prevProps.isEditing) {
            this.textInput.focus();
            this.textInput.value = this.props.text;
        }
    }
    handleKeyDown(e){
        if(e.keyCode === 13 && e.target.value.length){
            this.props.saveTodo(e.target.value);
            e.target.value = '';
        }
    }
    render() {
        const {
            id,
            text,
            isDone,
            isEditing,
            deleteTodo,
            toggleTodo,
            editTodo,
            cancelEdit
        } = this.props;

        return(
            <li className={ClassNames('todo-item', {
                'editing': isEditing,
                'completed': isDone
            })}>
                <div className="toggle"
                    onClick={toggleTodo}
                />
                <div className="todo-item__view">
                    <div
                        className="todo-item__view__text"
                        onDoubleClick={editTodo}
                    >{text}</div>
                    <button
                        className="todo-item__destroy"
                        onClick={()=> deleteTodo(id)}
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
        )
    }
}

export default Todo;
