import React from 'react';

// Additional Methods
// 1) selectFilter
// 2) deleteCompleted
class Footer extends React.Component{
  render() {
    return (
      <div className="footer">
        <span className="todo-count">0 items left</span>
      <ul className="todo-filters">
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Active</a>
        </li>
        <li>
          <a href="#">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear Completed</button>
      </div>
    );
  }
}

export default Footer;
