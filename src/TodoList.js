/**
 * Created by sajacaros on 2017-02-11.
 */
import React, {Component} from 'react';

class TodoList extends Component {
    render() {
        return(
            <div className="todo-app__main">
                <div className="toggle-all" />
                <ul className="todo-list"></ul>
            </div>
        );
    }
}

export default TodoList;