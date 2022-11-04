import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeProvider';

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('Missing ThemeContext provider!');
    }
    return ctx;
};
