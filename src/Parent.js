import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [{
        name: 'gomugom',
        phone: 1234,
        show: false
      }, {
        name: 'iu',
        phone: 555,
        show: false
      }, {
        name: 'akmu',
        phone: 7777,
        show: false
      }]
    };
  }
  handleClick(i) {
    const newPeople = this.state.people;
    newPeople[i].show = !newPeople[i].show;
    this.setState({
      people: newPeople
    });
  }
  render() {
    const children = this.state.people.map(({...r}, i) => (
      <Child
        key={`CHILD${i}`}
        handleClick={()=> this.handleClick(i)}
        {...r}
      />
    ));

    return (
      <ul>
        {children}
      </ul>
    );
  }
}
export default Parent;
