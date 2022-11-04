import Header from '../components/header/header';
import { Outlet } from 'react-router-dom';
import UserContextProvider from '../contexts/userProvider';
import ThemeProvider from '../contexts/themeProvider';

const Root = () => {
    return (
        <UserContextProvider>
            <ThemeProvider>
                <Header />
                <Outlet />
            </ThemeProvider>
        </UserContextProvider>
    );
};

export default Root;
