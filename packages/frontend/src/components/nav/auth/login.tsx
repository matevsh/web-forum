import {NavLink} from 'react-router-dom';
import {useContext} from 'react';
import {UserContext} from '../../../contexts/userProvider';
import {userContext} from '../../../../types/userContext';
import {MouseEvent} from 'react';

const NavLogin= () => {
    const userContext = useContext<userContext | null>(UserContext);

    const handleLogout = (e :MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        userContext?.logout();
    };

    return (
        <>
            <div className='nav-link__container'>
                <NavLink end={true} className='nav-link' to={'/'}>
                    home
                </NavLink>
                <a className='nav-link' href='#' onClick={(handleLogout)}>
                    wyloguj
                </a>
                <NavLink className='nav-link' to={'thread/add'}>
                    zapostuj
                </NavLink>
                <div className='nav-profile'>
                    <img src={`http://localhost:3000/api/avatar/${userContext?.user?.idAvatar}`} alt=""/>
                    <p>{userContext?.user?.login}</p>
                </div>
            </div>
        </>
    );
};

export default NavLogin;
