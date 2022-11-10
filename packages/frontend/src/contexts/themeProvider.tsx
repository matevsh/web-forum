import { createContext, ReactNode, useEffect, useState } from 'react';
import { themeContext } from '../../types/themeContext';
import useLocalTheme from '../hooks/useLocalTheme';

export const ThemeContext = createContext<themeContext | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const { save, load } = useLocalTheme();

    useEffect(() => {
        const lsData = load();
        lsData && setDarkTheme(lsData);
    }, []);

    const changeTheme = () => {
        const nextValue = !darkTheme;
        save(nextValue);
        setDarkTheme(nextValue);
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
