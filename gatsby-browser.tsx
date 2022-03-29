import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/style/theme'
import GlobalStyle from './src/style/globalStyles'




export const wrapRootElement = ({element})=> (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {element}
    </ThemeProvider>
)
