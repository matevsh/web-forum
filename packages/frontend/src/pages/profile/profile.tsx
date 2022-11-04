import {useLoaderData} from 'react-router-dom';
import {userProfileData} from '../../../../common/types/user';
import background from './background.png';
import './profile.scss';
import {UserContext} from '../../contexts/userProvider';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import * as dayjs from 'dayjs';

const isUser = (data: unknown): data is userProfileData => {
    if(typeof data !== 'object' || Array.isArray(data) || !data) return false;

    return !(!('id' in data) || !('login' in data) || !('email' in data)
        || !('idAvatar' in data)  || !('created' in data)
        || !('Thread' in data));
};

const Profile = () => {
    const profile = useLoaderData();
    const userContext = useContext(UserContext);

    if(!profile || !isUser(profile)) return <p>Profile error loading</p>;

    return (
        <>
            <header className='profile-header' style={{
                backgroundImage: `url(${background})`
            }}>
                <div>
                    <img src={`http://localhost:3000/api/avatar/${profile.idAvatar}`} alt=""/>
                    <p>{profile.login}</p>
                </div>
            </header>
            <main className='profile-content'>
                <h2>
                    {userContext?.user?.id === profile.id
                        ? 'Twoje tematy': `Tematy użytkownika ${profile.login}`}
                </h2>
                {profile.Thread.map(x => {
                    const date = dayjs(x.published).format('DD/MM/YYYY HH:mm');

                    return(
                        <Link key={x.id} to={`/thread/${x.id}`} className='profile-content__thread'>
                            <p className='profile-content__thread-title'>{x.title}</p>
                            <p>{date}</p>
                        </Link>
                    );
                })}
            </main>
        </>
    );
};

export default Profile;
