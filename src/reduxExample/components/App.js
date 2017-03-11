import React from 'react';
import { connect } from 'react-redux';

import InputBox from './InputBox';
import AccountBook from './AccountBook';

import accountAction from '../actions/accountAction';

const mapStateToProps = state => ({
	// 필요한 state만 가져온다.
	accountList : state.accountList
});

const mapDispatchToProps = dispatch => ({
	save     : money => dispatch(accountAction.save(money)),
	withdraw : money => dispatch(accountAction.withdraw(money))
});

class App extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		const {
			      accountList,
			      save,
			      withdraw,
		      } = this.props;
		return (
			<div>
				<InputBox
					save={save}
					withdraw={withdraw}
				/>
				<AccountBook accountList={this.props.accountList}/>
			</div>
		)
	}
}

// 클로저 형태가 된다.
export default connect(mapStateToProps, mapDispatchToProps)(App);