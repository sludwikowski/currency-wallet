import types from './exchangeApi.types'

const initState = {
  rates: {}
}

const exchangeApiReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.SET_CURRENT_RATE:
      return { ...state, rates: payload }
    default:
      return state
  }
}

export default exchangeApiReducer
