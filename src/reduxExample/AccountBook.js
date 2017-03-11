import React from 'react';

const AccountBook = ({ accountList }) =>{
  const tableData = accountList.map(({type, money, result},i)=>(
    <tr key ={i}>
      <td>{type === 'save' && money}</td>
      <td>{type === 'withdraw' && money}</td>
      <td>{result}</td>
    </tr>
  ));
  return(
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>

        </tr>
      </tbody>
    </table>
  );
};

export default AccountBook;
