import React from 'react'
import { useDispatch } from 'react-redux'

import { validateForm } from '../helpers/validateForm'
import { addItem } from '../localStorage/localStorage.actions'

import { v4 as uuid } from 'uuid'

import { Box, FormControl, TextField, Fab, Alert } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

function WalletForm () {
  const initState = {
    currency: '',
    price: '',
    date: '',
    quantity: '',
    key: '',
    errors: []
  }

  const [state, setState] = React.useState(initState)

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const errors = validateForm(state)
    if (errors.length === 0) {
      dispatch(addItem(state))
      clearFormFields()
    } else {
      setState({ ...state, errors })
    }
  }

  const getFieldsData = () => {
    const fieldsData = Object.assign({}, state)
    delete fieldsData.errors
    return fieldsData
  }

  const clearFormFields = () => {
    const fieldsData = getFieldsData()
    for (const prop in fieldsData) {
      fieldsData[prop] = ''
    }
    fieldsData.errors = []
    setState(fieldsData)
  }

  const handleFieldChange = e => {
    e.preventDefault()
    setState({ ...state, [e.target.name]: e.target.value, id: uuid() })
  }

  const renderErrors = () => {
    return state.errors.map((err, index) => {
      return (
        <Alert
          key={index}
          sx={{ maxWidth: 350, fontWeight: 500 }}
          severity={'error'}
        >
          {err}
        </Alert>
      )
    })
  }
  return (
    <Box
      component={'form'}
      sx={{ m: 2 }}
      action={''}
      onSubmit={handleSubmit}
    >
      <>
        {renderErrors()}
      </>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          label={'Waluta'}
          helperText={'Kod walutowy(3 litery)'}
          color={'success'}
          type={'text'}
          name={'currency'}
          onChange={handleFieldChange}
          value={state.currency || ''}
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          label={'Ilość'}
          helperText={'> 0'}
          color={'success'}
          type={'number'}
          name={'quantity'}
          onChange={handleFieldChange}
          value={state.quantity || ''}
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          type={'date'}
          name={'date'}
          helperText={'Data zakupu'}
          onChange={handleFieldChange}
          value={state.date || ''}
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          label={'Cena zakupu'}
          helperText={'> 0'}
          color={'success'}
          type={'number'}
          name={'price'}
          onChange={handleFieldChange}
          value={state.price || ''}
        />
      </FormControl>
      <FormControl sx={{ m: 2 }}>
        <Fab
          color={'success'}
          size={'small'}
          type={'submit'}
        >
          <AddIcon/>
        </Fab>
      </FormControl>
    </Box>
  )
}

export default WalletForm
