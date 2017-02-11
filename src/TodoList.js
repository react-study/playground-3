/**
 * Created by sajacaros on 2017-02-11.
 */
import React, {Component} from 'react';
import Todo from './Todo';

const data = [{
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
    isDone: true
},{
    id:4,
    text: 'hello world4',
    isDone: true
}];

class TodoList extends Component {
    render() {
        const todos = data.map(todo =>(
           <Todo
               key={`todo#${todo.id}`}
                text={todo.text}
                isDone={todo.isDone}
           />
        ));
        return(
            <div className="todo-app__main">
                <div className="toggle-all" />
                   {todos}
                <ul className="todo-list"></ul>
            </div>
        );
    }
}

export default TodoList;