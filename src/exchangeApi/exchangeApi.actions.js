/* eslint-disable no-unused-vars */
import types from './exchangeApi.types'

export const setCurrentRate = (rates) => ({
  type: types.SET_CURRENT_RATE,
  payload: rates
})

export const getCurrentRates = () => {
  return (dispatch, getState) => {
    const myHeaders = new Headers()
    myHeaders.append('apikey', 'fI8B2NrtADAs5GPxIB98WIXlHJ2LLlWI')

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    }

    return fetch('https://api.apilayer.com/exchangerates_data/latest?base=PLN', requestOptions)
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        throw Error('Something went wrong')
      })
      .then(resp => dispatch(setCurrentRate(resp.rates)))
  }
}
