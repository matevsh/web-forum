import {NavLink} from 'react-router-dom';
import {useContext} from 'react';
import {UserContext} from '../../../contexts/userProvider';
import {userContext} from '../../../../types/user';
import {MouseEvent} from 'react';

const NavLogin= () => {
    const userContext = useContext<userContext | null>(UserContext);

    const handleLogout = (e :MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        userContext?.logout();
    };

    return (
        <>
            <NavLink className='nav-link' to={`profile/${userContext?.user?.id}`}>
                profil
            </NavLink>
            <a className='nav-link' href='#' onClick={(handleLogout)}>
                wyloguj
            </a>
        </>
    );
};

export default NavLogin;
