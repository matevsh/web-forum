import {NavLink} from 'react-router-dom';
import {useContext} from 'react';
import {UserContext} from '../../../contexts/userProvider';
import {userContext} from '../../../../types/user';

const NavLogin= () => {
    const userContext = useContext<userContext | null>(UserContext);

    return (
        <>
            <NavLink className='nav-link' to={`profile/${userContext?.user?.id}`}>
                profil
            </NavLink>
            <NavLink className='nav-link' to={'wyloguj'}>
                wyloguj
            </NavLink>
        </>
    );
};

export default NavLogin;
