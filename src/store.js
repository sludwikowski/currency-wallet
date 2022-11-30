import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const initialState = JSON.parse(localStorage.getItem('inputValues')) || undefined

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('inputValues', JSON.stringify(state))
})

export default store
