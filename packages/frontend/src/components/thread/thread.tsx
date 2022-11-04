import { useNavigate} from 'react-router-dom';
import {threadLoaderData} from '../../../types/threadLoaderData';
import * as dayjs from 'dayjs';
import './thread.scss';
import imgUrl from './img.png';

const Thread = ({title, views, id, published, user}: threadLoaderData) => {
    const date = dayjs(published).format('DD/MM/YYYY HH:mm');

    const redirect = useNavigate();

    return (
        <div
            className='thread-card__content'
            onClick={() => {
                redirect(`thread/${id}`);
            }}>
            <div className='thread-card__info'>
                <p>{date}</p>
                <div className='thread-card__info-views'>
                    <img src={imgUrl} alt=""/>
                    <p>{views}</p>
                </div>
            </div>

            <h1 className='thread-card__title'>{title}</h1>
            <div className="thread-card__user"
                onClick={(e) => {
                    e.stopPropagation();
                    redirect(`/profile/${user.id}`);
                }}>
                <img src={`http://localhost:3000/api/avatar/${user.idAvatar}`} alt='user avatar'/>
                <p>{user.login}</p>
            </div>
        </div>
    );
};

export default Thread;
