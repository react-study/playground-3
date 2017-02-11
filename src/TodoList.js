/**
 * Created by sajacaros on 2017-02-11.
 */
import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        const todos = this.props.todos.map(todo =>(
           <Todo
               key={`todo#${todo.id}`}
                text={todo.text}
                isDone={todo.isDone}
                deleteTodo={()=>this.props.deleteTodo(todo.id)}
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