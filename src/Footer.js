/**
 * Created by sajacaros on 2017-02-11.
 */
import React, {
    Component
} from 'react';
import ClassNames from 'classnames';
class Footer extends Component {
    render() {
        const {
            filterName,
            activeLength,
            completedLength,
            deleteCompleted,
            selectFilter
        } = this.props;

        const filters = ['All', 'Active', 'Completed'];
        return(
            <div className="footer">
                <span className="todo-count">
                    <strong>{activeLength}</strong>
                    {' '}
                    {activeLength===1 ? 'item':'items'}
                    left
                </span>
                <ul className="todo-filters">
                    {
                        filters.map(
                            filter=>{
                                return <li key={`filter#${filter}`}>
                                    <a
                                        href="#"
                                        className={
                                            ClassNames({'selected':filterName===filter})
                                        }
                                        onClick={()=>selectFilter(filter)}
                                    >
                                        {filter}
                                    </a>
                                </li>;
                            }
                        )
                    }
                </ul>
                <button className={[
                    'todo-delete-completed',
                    completedLength ? '' : 'hidden'
                ].join( ' ')}
                        onClick={deleteCompleted}
                >
                    clear Completed
                </button>
            </div>
        );
    }
}

export default Footer;