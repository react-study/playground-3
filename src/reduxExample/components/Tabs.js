import React from 'react';

const tablist = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
  'sunt in culpa qui officia deserunt mollit anim id est laborum.'
]
class Tabs extends React.Component {

  render(){
    const {
      focused,
      changeTab
    } = this.props;

    const tabs = tablist.map((cont, i) => (
      <li key={`tablist${i}`} onClick={() => changeTab(i)}>
        <span>${i}</span>
        <span style={{
          display: i == focused ? 'block' : 'none'
        }}>{cont}</span>
      </li>
    ))
    return (
      <ul>
        {tabs}
      </ul>
    )
  }
}

export default Tabs;
