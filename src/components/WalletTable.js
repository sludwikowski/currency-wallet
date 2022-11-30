/* eslint-disable dot-notation,space-infix-ops */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeItem } from '../localStorage/localStorage.actions'
import { getCurrentRates } from '../exchangeApi/exchangeApi.actions'

import RemoveIcon from '@mui/icons-material/Remove'
import {
  Fab,
  Table, TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper, styled
} from '@mui/material'

function WalletTable () {
  const dispatch = useDispatch()
  const localStorageList = useSelector(state => state.localStorageCurr)
  const ratesList = useSelector(state => state.exchangeApi)
  useEffect(() => {
    dispatch(getCurrentRates())
  }, [dispatch])

  const getCurrentPrice = (currency) => {
    return (ratesList.rates['PLN'] / ratesList.rates[currency]).toFixed(2)
  }

  const newLocalStorageList = localStorageList.map(item => ({ ...item, rates: getCurrentPrice(item.currency) }))

  const getCurrentAmount = (rates, quantity) => {
    return (rates * quantity).toFixed(2)
  }

  const getProfitValue = (rates, quantity, price) => {
    return ((rates * quantity) - (price * quantity)).toFixed(2)
  }

  const getProfitPercentage = (rates, quantity, price) => {
    return (getProfitValue(rates, quantity, price) / (price * quantity)).toFixed(2)
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      fontWeight: 300
    }
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700 }}
        aria-label={'table'}
      >
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align={'center'}>
              Data zakupu
            </StyledTableCell>
            <StyledTableCell align={'center'}>
              Waluta
            </StyledTableCell>
            <StyledTableCell align={'center'}>
              Ilość
            </StyledTableCell>
            <StyledTableCell align={'center'}>
              Cena zakupu
            </StyledTableCell>
            <StyledTableCell align={'center'}>
              Obecny kurs
            </StyledTableCell>
            <StyledTableCell align={'center'}>
              Obecna wartość
            </StyledTableCell>
            <StyledTableCell align={'center'}>
              Zysk/Strata
            </StyledTableCell>
            <StyledTableCell align={'center'}>
              Usuń
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {newLocalStorageList.map(({ id, currency, price, quantity, date, rates }) => (
            <StyledTableRow
              key={id}
            >
              <StyledTableCell
                align={'center'}
                component={'th'}
                scope={'row'}
              >
                {date}
              </StyledTableCell>
              <StyledTableCell align={'center'}>
                {currency}
              </StyledTableCell>
              <StyledTableCell align={'center'}>
                {quantity}
              </StyledTableCell>
              <StyledTableCell align={'center'}>
                {price}
              </StyledTableCell>
              <StyledTableCell align={'center'}>
                {rates}
              </StyledTableCell>
              <StyledTableCell align={'center'}>
                {getCurrentAmount(rates, quantity)}
              </StyledTableCell>
              <StyledTableCell align={'center'}>
                {getProfitValue(rates, quantity, price)}({getProfitPercentage(rates, quantity, price)} %)
              </StyledTableCell>
              <StyledTableCell align={'center'}>
                <Fab
                  type={'delete'}
                  onClick={() => {
                    dispatch(removeItem(id))
                  }}
                  size={'small'}
                  color={'error'}
                >
                  <RemoveIcon/>
                </Fab>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default WalletTable
