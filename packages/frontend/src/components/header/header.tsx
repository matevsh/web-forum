import Nav from '../nav/nav';
import { Link } from 'react-router-dom';
import scss from './header.module.scss';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
    const { darkTheme } = useTheme();

    return (
        <header className={`${scss.header} ${darkTheme ? scss.dark : ''}`}>
            <div className={scss.content}>
                <Link to="/" className={scss.link}>
                    <h1>web-forum</h1>
                </Link>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
