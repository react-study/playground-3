import React from 'react';
import InputBox from './InputBox';
import AccountBook from './AccountBook';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            accountList: [],
            total: 0
        };
    }
    save(money) {
        if(typeof money !== 'number') return;
        this.setState({
            accountList: [
                ...this.state.accountList, {
                    type: 'save',
                    money,
                    result: this.state.total + money
                }
            ],
            total: this.state.total + money
        });
    }
    withdraw(money) {
        if(typeof money !== 'number') return;
        this.setState({
            accountList: [
                ...this.state.accountList, {
                    type: 'withdraw',
                    money,
                    result: this.state.total - money
                }
            ],
            total: this.state.total - money
        });
    }
    render() {
        return (
            <div>
                <InputBox
                    save={money => this.save(+money)}
                    withdraw={money => this.withdraw(+money)}
                />
                <AccountBook accountList={this.state.accountList}/>
            </div>
        )
    }
}

export default App;
