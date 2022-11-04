import scss from './theme-switch.module.scss';
import { useTheme } from '../../../hooks/useTheme';

const ThemeSwitch = () => {
    const { darkTheme, changeTheme } = useTheme();

    return (
        <>
            {darkTheme ? (
                <div className={scss.themeBtn} onClick={changeTheme}>
                    <i className="fa-solid fa-sun fa-fw fa-xl"></i>
                </div>
            ) : (
                <div
                    className={`${scss.themeBtn} ${scss.dark}`}
                    onClick={changeTheme}
                >
                    <i className="fa-solid fa-moon fa-fw fa-xl"></i>
                </div>
            )}
        </>
    );
};

export default ThemeSwitch;
