import React from 'react'

import Header from './Header'
import WalletForm from './WalletForm'
import WalletTable from './WalletTable'

import { Box } from '@mui/material'

function Wallet () {
  return (
    <Box
      sx={{ m: 2, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      <Header>PORTFEL WALUTOWY</Header>
      <WalletForm/>
      <WalletTable/>
    </Box>

  )
}

export default Wallet
