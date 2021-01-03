import React from 'react'
import GlobalStyles from './Styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import dark from './Styles/Themes/dark'
import Routes from './routes/'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Routes/>
        </ThemeProvider>
    )
}

export default App