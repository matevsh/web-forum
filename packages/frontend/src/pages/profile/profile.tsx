import {useLoaderData} from 'react-router-dom';
import {user} from '../../../../common/types/user';

type profileLoaderData = {
    error: boolean
    user: user
}

const Profile = () => {
    const {user} = useLoaderData() as profileLoaderData;

    return (
        <main className='main-content'>
            <h1>This is Profile page</h1>
            <p>{`UserID: ${user.id}, Login: ${user.login}`}</p>
        </main>
    );
};

export default Profile;
