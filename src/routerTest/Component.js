import React from 'react';

export const Home = () => ( <h2>Home</h2> );

export const About = ({ children }) => (
	<div>
		<h2>About</h2>
		<div>{children}</div>
	</div>
);

export const Name = () => ( <h2>이름</h2> );

const allList = [
	{ id: 1, text: 'portfolio #1' },
	{ id: 2, text: 'portfolio #2' },
	{ id: 3, text: 'portfolio #3' }
];

export const Portfolio = ({ routeParams: {id} } ) => {
	const filteredList = id ? allList.filter(v => v.id === id) : allList;
	const renderList = filteredList.map(v => (
		<li key={v.id}>{v.text}</li>
	));
	return(
		<div>
			<h2>Portfolio</h2>
			<ul>{renderList}</ul>
		</div>
	);
}