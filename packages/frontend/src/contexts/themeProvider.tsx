import { createContext, ReactNode, useState } from 'react';
import { themeContext } from '../../types/themeContext';

export const ThemeContext = createContext<themeContext | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const changeTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
