import React, {Component} from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    constructor(){
        super();
        this.state={
            todos:[
                {
                    id:1,
                    text: '할일 1',
                    isDone:false
                },{
                    id:2,
                    text: '할일 2',
                    isDone:false
                },{
                    id:3,
                    text: '할일 3',
                    isDone:true
                }
            ]
        };
        //this.addTodo = this.addTodo.bind(this);
    }

    addTodo(text){
        this.setState({
            todos: [
                ...this.state.todos,{
                    id: Date.now(),
                    text : text,
                    isDone : false
                }
            ]
        });
    }

    deleteTodo(id){
        const newTodos = [...this.state.todos];
        const deleteIdx = newTodos.findIndex(todo => todo.id ===id);
        newTodos.splice(deleteIdx,1);
        this.setState({
            todos:newTodos
        });
    }

    render() {
        return (
            <div className="todo-app">
                <Header addTodo={text => this.addTodo(text)}/>
                <TodoList
                    todos={this.state.todos}
                    deleteTodo={id => this.deleteTodo(id)}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;
