import NavLogout from './auth/logout';
import NavLogin from './auth/login';
import './nav.scss';
import {useContext} from 'react';
import {UserContext} from '../../contexts/userProvider';
import {userContext} from '../../../types/userContext';

const Nav = () => {
    const userContext = useContext<userContext | null>(UserContext);

    return (
        <nav className='main-nav'>
            {userContext?.user ? <NavLogin /> : <NavLogout />}
        </nav>
    );
};

export default Nav;
