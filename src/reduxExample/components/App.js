import React from 'react';
import { connect } from 'react-redux';

import InputBox from './InputBox';
import AccountBook from './AccountBook';
import accountAction from '../actions/accountAction';

const mapStateToProps = state => ({
    accountList: state.accountList
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
                <AccountBook accountList={accountList} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);