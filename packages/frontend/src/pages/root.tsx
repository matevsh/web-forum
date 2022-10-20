import Header from '../components/header/header';
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Root;
