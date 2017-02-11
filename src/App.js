import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

// apply(), call(), bind()의 차이를 알아볼것
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos : [
        {
          id: 1,
          text: "치킨에 맥주",
          isDone: false
        },{
          id: 2,
          text: "치킨에 맥주2",
          isDone: false
        },{
          id: 3,
          text: "치킨에 맥주3",
          isDone: true
        }
      ]
    };
    // bind를 하는 방법
    // 1) render() 에서 하는 법 (중복가능)
    // 2) constructor 내부에서 하는 방법
    // 3) Arroy Function을 사용하는 방법 (가장간단)
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(text){
    this.setState({
      todos: [
        ...this.state.todos, {
          id: Date.now(),
          text: text,
          isDone: false
        }
      ]
    });
  }

  // reactjs 의 state는 바로 접근해서 수정하면 착오를 일으킴
  // deep copy로 받아와서 다시 setState로 적용해야 함
  deleteTodo(id){
    const newTodos = [...this.state.todos];
    const deleteIndex = newTodos.findIndex(todo => todo.id === id);
    newTodos.splice(deleteIndex, 1);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="todo-app">
        <Header
          addTodo={text => this.addTodo(text)}
        />
        <TodoList
          todos={this.state.todos}
          deleteTodo={id => this.deleteTodo(id)}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
