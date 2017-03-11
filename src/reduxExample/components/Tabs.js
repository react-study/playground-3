import React from 'react';

const tablist = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, fuga.',
  'Omnis quibusdam nesciunt aspernatur quas repellat, officia. Deserunt, quisquam, natus!',
  'Delectus animi consequuntur atque, veritatis ut dolores, dignissimos commodi doloremque!',
  'Maiores, sit, illum. Eius praesentium, cupiditate reprehenderit eaque pariatur numquam.'
];

class Tabs extends React.Component {
  render() {
    const {
      focused,
      changeTab
    } = this.props;
    const tabs = tablist.map((cont, i) => (
      <li key={`tablist${i}`} onClick={()=> changeTab(i)}>
        <span>#{i}</span>
        <span style={{
          display: i === focused ? 'block' : 'none'
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
