/**
 * Created by sajacaros on 2017-02-11.
 */
import React, {Component} from 'react';

class Header extends Component {
    render() {
        return(
            <header>
                <h1 className="todo-app__header">todos</h1>
                <input
                    type="text"
                    className="todo-app__new-todo"
                    placeholder="What needs to be done?"
                    />
            </header>
        );
    }
}

export default Header;