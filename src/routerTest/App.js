import React from 'react';
import {Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import Container from './Container';
import { Home, About, Name, Portfolio} from './Component';


class App extends React.Component{
	render(){
		return(
			<Router history={browserHistory}>
				<Route path="/" component={Container} >
					<IndexRoute component={Home} /> 					
					<Route path="about" component={About}>
						<Route path="name" component={Name}></Route>
						<Route path="redirect0" 
							onEnter={ (nexState, replace) => replace('/portfolio/1') }
						/>
						<Redirect from ="redirect1" to="/portfolio/2"></Redirect>

					</Route>
					<Route path="portfolio(/:id)" component={Portfolio} />
				</Route>
			</Router>
		)



	}
};
/*
/		:home 
/about : "value",  About <Route>
/about/name
/about/redirect0  /about/portfolio/1
/about/redirect1  /about/portfolio/2
/portfolio
/portfolio/id     routerPrame으로 넘김 

: -> 파라미터로 들어간다는 의미  








*/

export default App;