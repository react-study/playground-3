/**
 * Created by sajacaros on 2017-02-11.
 */
import React, {Component} from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos:[{
                id:1,
                text: 'hello world1',
                isDone: true
            },{
                id:2,
                text: 'hello world2',
                isDone: false
            },{
                id:3,
                text: 'hello world3',
                isDone: false
            },{
                id:4,
                text: 'hello world4',
                isDone: true
            }]
        };
    }

    addTodo(text) {
        this.setState({
            todos: [...this.state.todos, {
                id: Date.now(),
                text: text,
                isDone : false
            }]
        });
    }

    deleteTodo(id) {
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.find(todo=>(todo.id==id));
        newTodos.splice(deleteIndex, 1);
        this.setState({
            todos: newTodos
        });
    }
    render() {
        return(
            <div>
                <Header addTodo={(text)=>this.addTodo(text)}/>
                <TodoList todos={this.state.todos} deleteTodo={(id)=>this.deleteTodo(id)} />
                <Footer />
            </div>
        );
    }
}

export default App;