import {Link} from 'react-router-dom';
import {thread} from '../../../types/thread';
import './thread.scss';

const Thread = ({title, views, id}: thread) => {
    return (
        <Link to={`thread/${id}`} className='thread-card__link'>
            <div className='thread-card__content'>
                <div className='thread-card__info'>
                    <p>20.10.2022 16:03</p>
                    <p>views: {views}</p>
                </div>
                <h2>{title}</h2>
            </div>
        </Link>
    );
};

export default Thread;
