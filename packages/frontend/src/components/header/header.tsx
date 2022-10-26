import Nav from '../nav/nav';
import './header.scss';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-header">
            <Link to='/' className="main-header__logo">
                <h1>web-forum</h1>
            </Link>
            <Nav />
        </header>
    );
};

export default Header;
