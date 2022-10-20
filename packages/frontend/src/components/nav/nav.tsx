import { NavLink } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
    const user = false;

    return (
        <nav className='main-nav'>
            <NavLink end={true} className='nav-link' to={'/'}>
                home
            </NavLink>
            <NavLink className='nav-link' to={'profile'}>
                profile
            </NavLink>
            <NavLink className='nav-link' to={'threads'}>
                thread
            </NavLink>
            { user
                ? <NavLink className='nav-link' to={'logout'}>
                logout
                </NavLink>
                : <NavLink className='nav-link' to={'auth'}>
                auth
                </NavLink>
            }
        </nav>
    );
};

export default Nav;
