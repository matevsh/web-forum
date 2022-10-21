import { NavLink } from 'react-router-dom';
import NavLogout from './auth/logout';
import NavLogin from './auth/login';
import './nav.scss';

const Nav = () => {
    const user = true;

    return (
        <nav className='main-nav'>
            <NavLink end={true} className='nav-link' to={'/'}>
                home
            </NavLink>
            {user ? <NavLogin /> : <NavLogout />}
        </nav>
    );
};

export default Nav;
