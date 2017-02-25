import React from 'react';
import {Link} from 'react-router';


const Container = ({children})=>(
	<div>
		<header>
			<ul>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/about">about</Link>
				</li>
				<li>
					<Link to="/about/name">about-name</Link>
				</li>
				<li>
					<Link to="/about/redirect0">redirect0</Link>
				</li>
				<li>
					<Link to="/about/redirect1">redirect1</Link>
				</li>
				<li>
					<Link to="/portfolio">portfolio</Link>
				</li>
				<li>
					<Link to="/portfolio/1">portfolio1</Link>
				</li>
				<li>
					<Link to="/portfolio/2">portfolio2</Link>
				</li>
				<li>
					<Link to="/portfolio/3">portfolio3</Link>
				</li>
			</ul>

		</header>
		{children}
	</div>
);

export default Container;
