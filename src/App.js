/**
 * Created by sajacaros on 2017-02-11.
 */
import React, {Component} from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <TodoList />
                <Footer />
            </div>
        );
    }
}

export default App;