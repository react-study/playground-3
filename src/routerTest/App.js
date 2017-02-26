import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Container from './Container';
import { Home, About, Name, Portfolio } from './Component';

class App extends React.Component {
	render() {
		return(
			<Router history={browserHistory}>
				<Route path="/" component={Container}>
					<IndexRoute component={Home} />
					<Route path="about" component={About}>
						<Route path="name" component={Name} />
						<Route path="redirect0"
							onEnter={(nextState, replace) => replace('/portfolio/1')}
						/>
						<Redirect from="redirect1" to="/portfolio/2"></Redirect>
					</Route>
					<Route path="portfolio(/:id)" component={Portfolio} />
				</Route>
			</Router>
		);
	}
}

/* 

/					: Home <IndexRoute>
/about 				: About <Route>
/about/name 		: Name <Route>
/about/redirect0 	: redirect to /portfolio/1 <Route>
/about/redirect1 	: redirect to /portfolio/2 <Redirect>
/portfolio 			: portfolio <Route>
/portfolio/id 		: portfolio 한테 id값을 'routeParams'으로 넘김. (/:id)(생략가능)
*/

export default App;