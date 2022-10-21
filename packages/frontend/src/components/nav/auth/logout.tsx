import {NavLink} from 'react-router-dom';

const NavLogout = () => {
    return (
        <>
            <NavLink className='nav-link' to={'auth'}>
                logowanie
            </NavLink>
        </>
    );
};

export default NavLogout;
