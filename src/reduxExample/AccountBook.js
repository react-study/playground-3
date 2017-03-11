import React from 'react';

class AccountBook extends React.Component {

  render(){
    const items = this.props.transaction.map(({value, sum}, i) => (
      <tr key={i}>
        <td>{value}</td>
        <td>{sum}</td>
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>액수</th>
            <th>종합</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    )
  }
}

export default AccountBook;
