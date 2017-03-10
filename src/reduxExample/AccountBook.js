import React from 'react';

class AccountBook extends React.Component {

    render() {
        const transactions = this.props.transactions;

        const transactionHistory = transactions.map(v => (
            <tr key={`history${v.id}`}>
                <td>{ v.type === 'save' ? v.amount : '' }</td>
                <td>{ v.type === 'withdraw' ? v.amount : '' }</td>
                <td>{ v.balance }</td>
            </tr>
        ));

        return(
            <div className="account_book">
                <table>
                    <thead>
                        <tr>
                            <th>입금</th>
                            <th>출금</th>
                            <th>잔액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionHistory}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AccountBook;