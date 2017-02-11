/**
 * Created by sajacaros on 2017-02-11.
 */
import React, {Component} from 'react';

class Header extends Component {
    handleKeyDown(e) {
        // 엔터를 눌렀을때, 텍스트내용이 있을때
        const text = e.target.value;
        if( e.keyCode == 13 && text ) {
            // -> this.props.addTodo(텍스트 내용)
            this.props.addTodo(text);
            // 인풋창 지우기
            e.target.value='';
        }
    }
    render() {
        return(
            <header>
                <h1 className="todo-app__header">todos</h1>
                <input
                    type="text"
                    className="todo-app__new-todo"
                    placeholder="What needs to be done?"
                    onKeyDown={
                        e=> this.handleKeyDown(e)
                    }
                    />
            </header>
        );
    }
}

export default Header;