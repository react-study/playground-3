import React from 'react';

// Additional Methods
// 1) ToggleAll
// 2) addTodo
class Header extends React.Component{
  render(){
    return (
      <div className="todo-app__header">
        <h1>todos</h1>
        <input className="todo-app__new-todo" placeholder="What needs to be done?"/>
      </div>
    );
  }
}

export default Header;
