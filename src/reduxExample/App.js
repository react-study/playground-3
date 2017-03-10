import React from 'react';

import InputBox from './InputBox';
import AccountBook from './AccountBook';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            transactions: [
                {
                    id: 1,
                    type: 'save',
                    amount: 3000,
                    balance: 3000
                }, {
                    id: 2,
                    type: 'withdraw',
                    amount: 1000,
                    balance: 2000
                }
            ]
        }
    }

    addTransaction(type, amount) {
        const tempId = Date.now();
        const newTransaction = this.state.transactions;
        const lastBalance = newTransaction.length
            ? newTransaction[newTransaction.length - 1].balance
            : 0

        let typeCheck = 1;

        if (type === 'withdraw') {
            typeCheck = -1
        }

        newTransaction.push({
            id: tempId,
            type,
            amount,
            balance: lastBalance + ( parseInt(amount) * typeCheck )
        })

        this.setState({
            transactions: newTransaction
        });
    }

    render() {
        return(
            <div className="account_book_app">
                <InputBox 
                    addTransaction={(type, amount) => this.addTransaction(type, amount)}
                />
                <AccountBook
                    transactions={this.state.transactions}
                />
            </div>
        );
    }
}

export default App;