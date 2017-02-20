import React, { Component } from 'react';
import ClassNames from 'classnames';

class Footer extends Component {
    render() {
        const {
            filterName,
            activeLength,
            completeLength,
            deleteCompleted,
            selectFilter
        } = this.props;

        const filters = ['All', 'Active', 'Completed'];

        return(
            <div className="footer">
                <span className="todo-count">
                    <strong>{activeLength}</strong>
                    {' '}
                    item{activeLength === 1 ? '' : 's '}
                    left
                </span>
                <ul className="todo-filters">
                    {filters.map(v => (
                        <li key={`filter#${v}`}>
                            <a
                                href="#"
                                className={
                                    ClassNames({
                                        'selected' : filterName === v
                                    })}
                                onClick={() => selectFilter(v)}
                            >{v}</a>
                        </li>
                    ))}
                </ul>
                <button className={[
                    'todo-delete-completed',
                    completeLength ? '' : 'hidden'
                ].join(' ').trim()}
                    onClick={deleteCompleted}
                >
                    Clear Completed
                </button>
            </div>
        );
    }
}

export default Footer;