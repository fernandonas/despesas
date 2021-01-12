import React, { createContext, useContext, useState } from 'react';
import dark from '../Styles/Themes/dark';
import light from '../Styles/Themes/light';

interface ITheme {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    }
}

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@minha-carteira:theme');
        if (themeSaved) {
            return JSON.parse(themeSaved)
        } else {
            return dark;
        }
    });

    const toggleTheme = () => {
        if (theme.title === 'dark') {
            setTheme(light)
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(light));
        } else {
            setTheme(dark);
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(dark));
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
}

export {
    useTheme,
    ThemeProvider
}