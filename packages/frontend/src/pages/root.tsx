import Header from '../components/header/header';
import {Outlet} from 'react-router-dom';
import useUser from '../hooks/useUser';
import UserContextProvider from '../context/userProvider';

const Root = () => {
    const {user, login} = useUser();

    return (
        <>
            <h1>{JSON.stringify(user)}</h1>
            <UserContextProvider user={user} login={login}>
                <>
                    <Header />
                    <Outlet />
                </>
            </UserContextProvider>
        </>
    );
};

export default Root;
