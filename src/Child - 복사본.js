//----- Child.js -----
import React from 'react';
class Child extends React.Component {
	render () {
		const { name, gender } = this.props;
		return (
			<div>
				<h2>{name}</h2>
				<strong>{gender}</strong>
			</div>
		);
	}
}

Child.defaultProps = {
  name: '이름없음',
  gender: '성별없음'
};


export default Child;