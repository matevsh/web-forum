import {NavLink} from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';

const NavLogout = () => {
    return (
        <>
            <div className='nav-link__container'>
                <NavLink end={true} className='nav-link' to={'/'}>
                    home
                </NavLink>
                <NavLink className='nav-link' to={'auth'}>
                    logowanie
                </NavLink>
            </div>
            <Sidebar>
                <p>This is logout sidebar</p>
            </Sidebar>
        </>
    );
};

export default NavLogout;
