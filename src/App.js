import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            todos : [
                { id: 1, text: '밥', isDone: false },
                { id: 2, text: '커피', isDone: false },
                { id: 3, text: '콜라', isDone: true },
                { id: 4, text: '술', isDone: false }
            ]
        }
    }
    addTodo(text){
        this.setState({
            todos: [...this.state.todos, {
                id: Date.now(),
                text,
                isDone: false
            }]
        });
    }
    deleteTodo(id){
        const deleteIndex = this.state.todos.findIndex(v => v.id === id);
        const newTodos = [...this.state.todos];
        newTodos.splice(deleteIndex, 1);
        this.setState({
            todos: newTodos
        })
    }
    render() {
        return(
            <div className="todo-app">
                <Header
                    addTodo = {text => this.addTodo(text)}
                 />
                <TodoList
                    todos = {this.state.todos}
                    deleteTodo = {id => this.deleteTodo(id)}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
