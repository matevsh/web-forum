import Nav from '../nav/nav';
import './header.scss';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {UserContext} from '../../context/userProvider';
import {userContext} from '../../../types/user';

const Header = () => {
    const userContext = useContext<userContext | null>(UserContext);

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
