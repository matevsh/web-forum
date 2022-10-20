import Header from '../components/header/header';
import Nav from '../components/nav/nav';
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
        </>
    );
};

export default Root;
