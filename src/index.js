import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core'
import theme from './theme'
import App from './App'

render(
  <Router>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('app')
)
