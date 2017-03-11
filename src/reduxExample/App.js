import React from 'react';
import update from 'immutability-helper';

import InputBox from './InputBox';
import AccountBook from './AccountBook';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      transaction: [
        {
          type: 'in',
          value:1000,
          sum:1000
        },
        {
          type: 'out',
          value: -500,
          sum: 500
        },
        {
          type: 'in',
          value: 200,
          sum: 700
        }
      ],
      total: 700
    }
  }

  add(amount){
    console.log('addBtnPressed');
    // const newItem = {
    //   type: 'in',
    //   value: amount,
    //   sum : this.state.total + amount
    // }
    //
    // this.setState(
    //   update(this.state.transaction, newItem)
    // )
  }

  withdraw(amount){
    console.log('withdrawBtnPressed');
  }

  render() {
    return(
      <div>
        <InputBox
          add={(amount) => this.add(amount)}
          widthdraw={(amount) => this.withdraw(amount)}
        />
        <AccountBook
          transaction = {this.state.transaction}
        />
      </div>
    )
  }
}

export default App;
