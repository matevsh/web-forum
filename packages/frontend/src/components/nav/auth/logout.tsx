import {NavLink} from 'react-router-dom';
import {useState} from 'react';

const NavLogout = () => {
    const [sidebar, setSidebar] = useState(false);

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
            <div className="hamburger-menu" onClick={() => setSidebar(!sidebar)}/>
            <div className={`hamburger-sidebar${sidebar ? ' hamburger-sidebar--active' : null}`}>
                this is sidebar
            </div>
        </>
    );
};

export default NavLogout;
