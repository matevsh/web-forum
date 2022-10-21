import {Outlet, NavLink} from 'react-router-dom';
import './auth.scss';

const Auth = () => {
    return (
        <main className='main-content'>
            <h1>This is auth page</h1>
            <nav className='auth-nav'>
                <NavLink className='auth-link' to={''} end={true}>
                    logowanie
                </NavLink>
                <NavLink className='auth-link' to={'register'}>
                    rejestracja
                </NavLink>
            </nav>
            <Outlet />
        </main>
    );
};

export default Auth;
