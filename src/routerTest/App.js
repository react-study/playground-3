import React from 'react';
import {Router, Route, IndexRoute, Redirect, browserHistory} from
'react-router';
import Container from './Container'
import {Home, About, Name, Portfolio} from './Component';

class App extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}>
            <Route path="name" component={Name}/>
            <Route path="redirect0"
              onEnter={(nextState, replace) => replace('/portfolio/1')}
            />
            <Redirect from ="redirect1" to="/Portfolio/2"></Redirect>
          </Route>
          <Route path="Portfolio(/:id)" component={Portfolio}/>
        </Route>
      </Router>
    )
  }
};


export default App;
