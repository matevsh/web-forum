import scss from './sidebar.module.scss';
import {useState} from 'react';

const Sidebar = ({children}: {children: JSX.Element}) => {
    const [sidebar, setSidebar] = useState(false);

    return(
        <>
            <div
                className={`${scss.background} ${sidebar ? scss.backgroundActive : ''}`}
                onClick={() => setSidebar(!sidebar)}>

            </div>
            <div
                className={scss.hamburger}
                onClick={() => setSidebar(!sidebar)}
            />
            <div className={`${scss.sidebar} ${sidebar ? scss.sidebarActive : ''}`}>
                {children}
            </div>
        </>
    );
};

export default Sidebar;