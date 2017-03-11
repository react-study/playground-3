import React from 'react';

const tablist = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, cupiditate!',
    'Enim, neque. Temporibus optio minus aliquam labore ea at esse.',
    'Odio saepe autem magni accusantium, nihil voluptate illo praesentium aliquam!',
    'Facere deserunt labore unde accusantium deleniti ex soluta quam laborum.'
];

class Tabs extends React.Component {
    render(){
        const {
            focused
        } = this.props;
        const tabs = tablist.map((cont, i) => (
            <li key={`tablist${i}`} onClick={() => changeTab(i)}>
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
