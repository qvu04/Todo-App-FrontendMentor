import { createContext, useEffect } from 'react'
import type { ThemeContextType } from '../types/themeContext.type'
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('theme', false);
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        };
    }, [isDarkMode])
    const toggleTheme = () => { setIsDarkMode(!isDarkMode) };
    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider