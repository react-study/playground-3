/**
 * Created by sajacaros on 2017-02-11.
 */
import React, {
    Component
} from 'react';
import ClassNames from 'classnames';

class Todo extends Component {
    componentDidUpdate(preProps) {
        if(this.props.isEditing && !preProps.isEditing) {
            this.textInput.focus();
            this.textInput.value = this.props.text;
        }
    }

    handleKeyDown(e) {
        // 엔터를 눌렀을때, 텍스트내용이 있을때
        const text = e.target.value;
        if( e.keyCode == 13 && text ) {
            // -> this.props.addTodo(텍스트 내용)
            this.props.saveTodo(text);
            // 인풋창 지우기
            e.target.value='';
        }
    }
    render() {
        const {
            text, isDone, isEditing, deleteTodo, editTodo, cancelEdit, toggleTodo
        } = this.props;

        return(
            <li className={
                ClassNames('todo-item', {'editing': isEditing, 'completed': isDone})
            }>
                <div className="toggle" onClick={toggleTodo}/>
                <div className="todo-item__view">
                    <div className="todo-item__view__text" onDoubleClick={editTodo}>
                        {text}
                    </div>
                    <button className="todo-item__destroy"
                        onClick={deleteTodo}
                    />
                </div>
                <input type="text"
                       className="todo-item__edit"
                       onKeyDown={(e)=>this.handleKeyDown(e)}
                       onBlur={cancelEdit}
                       ref={ref=>this.textInput = ref}
                />
            </li>
        );
    }
}

export default Todo;