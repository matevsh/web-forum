import Header from '../components/header/header';
import {Outlet} from 'react-router-dom';
import UserContextProvider from '../contexts/userProvider';

const Root = () => {
    return (
        <UserContextProvider>
            <Header />
            <Outlet />
        </UserContextProvider>
    );
};

export default Root;
