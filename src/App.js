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
      ],
      idOnEdit: null,
      filterName: 'All'
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

  deleteCompleted() {
    const newTodos = this.state.todos.filter( v => !v.isDone);
    this.setState({
      todos: newTodos
    });
  }

  editTodo(id){
    this.setState({
      idOnEdit: id
    });
  }

  cancelEdit() {
    this.setState({
      idOnEdit: null
    });
  }

  saveTodo(id, newText){
    const newTodos = [...this.state.todos];
    const editIndex = newTodos.findIndex(todo => todo.id === id);
    newTodos[editIndex].text = newText;

    this.setState({
      todos: newTodos,
      idOnEdit: null
    });
  }

  toggleTodo(id) {
    const newTodos = [...this.state.todos];
    const toggleIndex = newTodos.findIndex(todo => todo.id === id);
    newTodos[toggleIndex].isDone = !newTodos[toggleIndex].isDone;

    this.setState({
      todos: newTodos
    });
  }

  toggleAll() {
    const toggleAll = !this.state.todos.every(v => v.isDone);
    const newTodos = this.state.todos.map( todo => {
      todo.isDone = toggleAll;
      return todo;
    });
    this.setState({
      todos: newTodos
    });
  }

  selectFilter(filter){
    this.setState({
      filterName: filter
    });
  }

  render() {
    const {
      todos,
      idOnEdit,
      filterName
    } = this.state;

    const activeLength = todos.filter(v => !v.isDone).length;
    const completeLength = todos.length - activeLength;
    const filteredTodos = (filterName == 'All') ? todos : todos.filter(todo => (

      (filterName == 'Active' && !todo.isDone) || filterName == 'Completed' && todo.isDone)
      // if(filterName == 'Active' && !todo.isDone) return true;
      // if(filterName == 'Completed' && todo.isDone) return true;
    );

    return (
      <div className="todo-app">
        <Header
          addTodo={text => this.addTodo(text)}
        />
        <TodoList
          todos={filteredTodos}
          editingId={idOnEdit}
          deleteTodo={id => this.deleteTodo(id)}
          editTodo={ id => this.editTodo(id)}
          saveTodo={(id,newText) => this.saveTodo(id, newText)}
          cancelEdit={() => this.cancelEdit()}
          toggleTodo={id => this.toggleTodo(id)}
          toggleAll={() => this.toggleAll()}
        />
        <Footer
          filterName={filterName}
          activeLength={activeLength}
          completeLength={completeLength}
          deleteCompleted={() => this.deleteCompleted()}
          selectFilter={filter => this.selectFilter(filter)}
        />
      </div>
    );
  }
}

export default App;
