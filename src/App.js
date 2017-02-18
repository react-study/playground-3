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
            }],
            editingId: null,
            filterName : 'All'
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

    editTodo(id) {
        this.setState({
            editingId:id
        });
    }
    cancelEdit() {
        this.setState({
            editingId:null
        });
    }

    saveTodo(id, newText) {
        const newTodos = [...this.state.todos];
        const editIndex = newTodos.findIndex( todo => (todo.id === id) );
        newTodos[editIndex].text = newText;
        this.setState({
            todos:newTodos,
            editingId : null
        });
    }

    toggleTodo(id) {
        const newTodos = [...this.state.todos];
        const toggleIndex = newTodos.findIndex( todo => (todo.id === id) );
        newTodos[toggleIndex].isDone = !newTodos[toggleIndex].isDone;
        this.setState({
            todos:newTodos
        });
    }

    toggleAll() {
        console.log('111');
        const newToggleAll = !this.state.todos.every( todo => todo.isDone);
        const newTodos = [...this.state.todos].map(todo => {
            todo.isDone = newToggleAll;
            return todo;
        });
        this.setState({
            todos:newTodos
        });
    }

    deleteCompleted() {
        const newTodos = this.state.todos.filter(todo=>!todo.isDone);
        this.setState({
            todos: newTodos
        });
    }

    selectFilter(filter) {
        this.setState({
            filterName : filter
        });
    }

    render() {
        const {
            todos,
            editingId,
            filterName
        } = this.state;

        const activeLength = todos.filter(todo=>!todo.isDone).length;
        const completedLength = todos.length - activeLength;
        const filteredTodos = (filterName === 'All') ?
            todos
            : todos.filter(todo => {
                return (filterName ==='Active' && !todo.isDone) ||
                (filterName ==='Completed' && todo.isDone);
            });

        return(
            <div className="todo-app__main">
                <Header addTodo={(text)=>this.addTodo(text)}/>
                <TodoList todos={filteredTodos}
                          editingId = {editingId}
                          deleteTodo={(id)=>this.deleteTodo(id)}
                          editTodo={(id)=>this.editTodo(id)}
                          saveTodo={(id, text)=>this.saveTodo(id,text)}
                          cancelEdit={()=>this.cancelEdit()}
                          toggleTodo={(id)=>this.toggleTodo(id)}
                          toggleAll={()=>this.toggleAll()}
                />
                <Footer
                    filterName = {filterName}
                    activeLength={activeLength}
                    completedLength={completedLength}
                    deleteCompleted={()=>this.deleteCompleted()}
                    selectFilter={(filter)=>{
                        console.log('filter : ' + filter );
                        this.selectFilter(filter);
                    }}
                />
            </div>
        );
    }
}

export default App;