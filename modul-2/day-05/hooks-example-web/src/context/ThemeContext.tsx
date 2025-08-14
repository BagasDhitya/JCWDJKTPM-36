'use client'
import { createContext, ReactNode, useContext, useState } from "react"

interface IThemeContext {
    isDarkMode: boolean,
    toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    function toggleTheme() {
        // setIsDarkMode((prev) => !prev)
        setIsDarkMode(!isDarkMode)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a Theme Provider')
    }
    return context
}