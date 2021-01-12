import React from 'react'
import GlobalStyles from './Styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Routes from './routes/'
import { useTheme } from './Hooks/theme'

const App: React.FC = () => {
    const { theme } = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes/>
        </ThemeProvider>
    )
}

export default App