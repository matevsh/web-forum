import {NavLink} from 'react-router-dom';

const NavLogin= () => {
    return (
        <>
            <NavLink className='nav-link' to={'profil'}>
                profil
            </NavLink>
            <NavLink className='nav-link' to={'wyloguj'}>
                wyloguj
            </NavLink>
        </>
    );
};

export default NavLogin;
