import { NavLink } from 'react-router-dom';

const linkStyle = {
    marginRight: '1rem',
    textDecoration: 'none'
};

const Nav = () => {
    return (
        <nav>
            <NavLink end={true} style={linkStyle} to={'/'}>
                home
            </NavLink>
            <NavLink style={linkStyle} to={'profile'}>
                profile
            </NavLink>
            <NavLink style={linkStyle} to={'threads'}>
                thread
            </NavLink>
        </nav>
    );
};

export default Nav;
