import React from 'react';

export const Home = () => (<h2>Home</h2>);

// stateless Component (children 이 props로 내려오면 div로 보여준다.)
export const About = ({ children }) => (
	<div>
		<h2>About</h2>
		<div>{children}</div>
	</div>
);

export const Name = () => ( <h3>이름</h3> );

const allList = [
	{ id : 1, text : 'portfolio #1' },
	{ id : 2, text : 'portfolio #2' },
	{ id : 3, text : 'portfolio #3' }
];

export const Portfolio = ({ routeParams: { id } }) => {
	const filteredList = id ? allList.filter(v => v.id == id) : allList;
	const renderList   = filteredList.map(v => (
		<li key={v.id}>{v.text}</li>
	));
	return (
		<div>
			<h2>Portfolio</h2>
			<ul>{renderList}</ul>
		</div>
	);
}