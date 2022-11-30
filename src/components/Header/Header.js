/* eslint-disable react/prop-types */
import React from 'react'

import { Toolbar, Typography } from '@mui/material'

const Header = (props) => {
  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Typography
        component={'h4'}
        variant={'h4'}
        color={'rgba(0, 0, 0, 0.54)'}
        align={'center'}
        noWrap
        sx={{ flex: 1 }}
      >
        {props.children}
      </Typography>
    </Toolbar>
  )
}

export default Header
