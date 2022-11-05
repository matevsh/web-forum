import { useNavigate } from 'react-router-dom';
import { threadLoaderData } from '../../../types/threadLoaderData';
import * as dayjs from 'dayjs';
import scss from './thread.module.scss';
import { useTheme } from '../../hooks/useTheme';
import { MouseEvent } from 'react';

const Thread = ({ title, id, published, user }: threadLoaderData) => {
    const date = dayjs(published).format('DD/MM/YYYY HH:mm');
    const { darkTheme } = useTheme();

    const redirect = useNavigate();

    const redirectToProfile = (e: MouseEvent) => {
        e.stopPropagation();
        redirect(`/profile/${user.id}`);
    };

    return (
        <div
            className={`${scss.card} ${darkTheme ? scss.dark : ''}`}
            onClick={() => redirect(`/thread/${id}`)}
        >
            <div className={scss.sideAvatar}>
                <img
                    src={`http://localhost:3000/api/avatar/${user.idAvatar}`}
                    alt={`user avatar (nr ${user.idAvatar})`}
                    onClick={redirectToProfile}
                />
            </div>
            <div className={scss.content}>
                <h1 className={darkTheme ? scss.dark : ''}>{title}</h1>
                <p
                    className={`${scss.postCreator} ${
                        darkTheme ? scss.dark : ''
                    }`}
                >
                    Dodane przez{' '}
                    <span onClick={redirectToProfile}>{user.login}</span>
                </p>
                <p className={`${scss.date} ${darkTheme ? scss.dark : ''}`}>
                    {date}
                </p>
            </div>
        </div>
    );
};

export default Thread;
