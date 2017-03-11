import React from 'react';

import { connect } from 'react-redux'; // store와 연결

import InputBox from './InputBox';
import AccountBook from './AccountBook';

import accountAction from '../actions/accountAction';

const mapStateToProps = state => ({
  accountList : state.accountList
});

const mapDispatchToProps = dispatch => ({
 save: money => dispatch(accountAction.save(money)),
 withdraw: money => dispatch(accountAction.withdraw(money))
});

class App extends React.Component {

  render() {
    const {
      accountList,
      save,
      withdraw
    } = this.props;

    return(
      <div>
        <InputBox
          save={save}
          withdraw={withdraw}
        />
        <AccountBook
          accountList = {accountList}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
  save(money){
    if(typeof money !== 'number') return;
    this.setState({
      accountList: [
        ...this.state.accountList,{
          type: 'save',
          money,
          result: this.state.total + money
        }
      ],
      total: this.state.total + money
    });
  }

  withdraw(amount){
    if(typeof money !== 'number') return;
    this.setState({
      accountList: [
        ...this.state.accountList,{
          type: 'withdraw',
          money,
          result: this.state.total - money
        }
      ],
      total: this.state.total - money
    });
  }
*/


  // construction & state 는 불필요
  // constructor() {
  //   super();
  //   this.state = {
  //     accountList: [],
  //     total: 700
  //   }
  // }
