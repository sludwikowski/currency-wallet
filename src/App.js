import React from 'react'

import Wallet from './components/Wallet'

import { ThemeProvider, CssBaseline, Container } from '@mui/material'

import { theme } from './theme'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth={'lg'}>
        <Wallet/>
      </Container>
    </ThemeProvider>
  )
}

export default App
