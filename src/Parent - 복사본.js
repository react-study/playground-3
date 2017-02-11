//----- Parent.js -----
import React from 'react';
import Child from './Child';
const people = [
	{name: 'gomugom', gender: 'male'},
	{name: 'mini', gender: 'male'},
	{},
	{name: 'sora', gender: 'female'},
]
class Parent extends React.Component {
	render() {
		const children = people.map(({name, gender}) => (
			<Child name={name} gender={gender} />
		));
		return (
			<div>
				{children}
			</div>
		);
	}
}
export default Parent;