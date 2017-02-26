import React, { Component } from 'react';
import { Link } from 'react-router';
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
        const filters = ['', 'active', 'completed'];

        return (
            <div className="footer">
                <span className="todo-count">
                    <strong>{activeLength}</strong>
                    {' '}
                    item{activeLength === 1 ? ' ' : 's '}
                    left
                </span>
                <ul className="todo-filters">
                    {filters.map(v => (
                        <li key={`filter#${v}`}>
                            <Link
                                to={`/${v}`}
                                className={
                                    ClassNames({
                                        'selected' : (filterName === v) || (!v && !filterName)
                                    })}
                                    >{v ? v.replace(/^\w/, v => v.toUpperCase()) : 'All'}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button
                    className={[
                        "todo-delete-completed",
                        completeLength ? '' : "hidden"
                    ].join(' ')}
                    onClick={deleteCompleted}
                >
                    Clear Completed
                </button>
            </div>
        );
    }
}

export default Footer;
