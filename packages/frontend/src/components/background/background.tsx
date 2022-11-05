import { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';
import scss from './background.module.scss';

console.log(scss);

const Background = ({ children }: { children: ReactNode }) => {
    const { darkTheme } = useTheme();

    return (
        <div className={`${scss.theme} ${darkTheme ? scss.dark : ''}`}>
            {children}
        </div>
    );
};

export default Background;
