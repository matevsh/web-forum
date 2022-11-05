import Header from '../components/header/header';
import { Outlet } from 'react-router-dom';
import UserContextProvider from '../contexts/userProvider';
import ThemeProvider from '../contexts/themeProvider';
import scss from './root.module.scss';
import Background from '../components/background/background';

const Root = () => {
    return (
        <UserContextProvider>
            <ThemeProvider>
                <Background>
                    <Header />
                    <div className={scss.container}>
                        <Outlet />
                    </div>
                </Background>
            </ThemeProvider>
        </UserContextProvider>
    );
};

export default Root;
