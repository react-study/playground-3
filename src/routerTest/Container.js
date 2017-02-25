import React from 'react';

// a 태그를 사용할 수 없기때문에 사용한다/
import { Link } from 'react-router'

const Container = ({ children }) => (
	<div>
		<header>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/about/name">About - Name</Link></li>
				<li><Link to="/about/redirect0">About - RedirectTo: Portfolio #1</Link></li>
				<li><Link to="/about/redirect1">About - RedirectTo: Portfoli #2</Link></li>
				<li><Link to="/portfolio">Portfolio - All</Link></li>
				<li><Link to="/portfolio/1">Portfolio - #1</Link></li>
				<li><Link to="/portfolio/2">Portfolio - #2</Link></li>
				<li><Link to="/portfolio/3">Portfolio - #3</Link></li>
			</ul>
		</header>
		
		{children}
	</div>
);

export default Container;