/**
 * Created by sajacaros on 2017-02-11.
 */
import React, {
    Component
} from 'react';

class Todo extends Component {
    render() {
        const {
            text, isDone, deleteTodo
        } = this.props;
        this.isDone;
        return(
            <li className="todo-item">
                <div className="toggle" />
                <div className="todo-item__view">
                    <div className="todo-item__view__text">{text}</div>
                    <button className="todo-item__destroy"
                        onClick={deleteTodo}
                    />
                </div>
                <input type="text" className="todo-item__edit" />
            </li>
        );
    }
}

export default Todo;