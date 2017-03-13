import React from 'react';

const tablist = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quam?',
    'Quis sed ex sit veniam. Cupiditate officiis necessitatibus esse impedit.',
    'Delectus incidunt maxime iusto modi eum, soluta placeat! Corrupti, quaerat!',
    'Omnis ex eos sequi assumenda facilis, harum praesentium quis quo.'
];

class Tabs extends React.Component {
    render() {
        const {
            focused,
            changeTab
        } = this.props;

        const tabs = tablist.map((cont, i) => (
            <li key={`tablist${i}`} onClick={() => changeTab(i)}>
                <span>#{i}</span>
                <span style={{
                    display: i === focused ? 'block' : 'none'
                }}>{cont}</span>
            </li>
        ));

        return (
            <ul>
                {tabs}
            </ul>
        );
    }
}

export default Tabs;