import React from 'react';

// class AccountBook extends React.Component {
//
//   render(){
//     const items = this.props.transaction.map(({value, sum}, i) => (
//       <tr key={i}>
//         <td>{value}</td>
//         <td>{sum}</td>
//       </tr>
//     ));
//
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>액수</th>
//             <th>종합</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items}
//         </tbody>
//       </table>
//     )
//   }
// }

const AccountBook = ({ accountList }) => {
  const tableData = accountList.map(({type, money, result}, i) => (
    <tr key={i}>
       <td>{type}</td>
       <td>{money}</td>
       <td>{result}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>입금</th>
          <th>출금</th>
          <th>계</th>
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>
  )
}

export default AccountBook;
