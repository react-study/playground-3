import React from 'react';

class Header extends React.Component {
    handleKeyDown(e){
        if(e.keyCode === 13 && e.target.value.length){
            this.props.addTodo(e.target.value);
            e.target.value = '';
        }
    }
    render() {
        return(
            <header>
                <h1 className="todo-app__header">todos</h1>
                <input
                    type="text"
                    className="todo-app__new-todo"
                    onKeyDown={e => this.handleKeyDown(e)}
                />
            </header>
        );
    }
}

export default Header;
