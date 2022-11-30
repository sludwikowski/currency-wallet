import { combineReducers } from 'redux'

import localStorageReducer from '../localStorage/localStorage.reducer'
import exchageApiReducer from '../exchangeApi/exchangeApi.reducer'

const reducers = combineReducers(
  {
    localStorageCurr: localStorageReducer,
    exchangeApi: exchageApiReducer
  }
)

export default reducers
