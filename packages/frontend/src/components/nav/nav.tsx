import NavLogout from './auth/logout';
import NavLogin from './auth/login';
import './nav.scss';
import { UserContext } from '../../contexts/userProvider';
import scss from './nav.module.scss';
import { useContext } from 'react';
import ThemeSwitch from './theme-switch/theme-switch';

const Nav = () => {
    const userContext = useContext(UserContext);

    return (
        <nav className={scss.nav}>
            <ThemeSwitch />
            {userContext?.user ? <NavLogin /> : <NavLogout />}
        </nav>
    );
};

export default Nav;
