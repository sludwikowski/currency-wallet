import types from './localStorage.types'

const initState = []

const localStorageReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return [...state, action.payload]
    case types.REMOVE_ITEM:
      return [...state.filter(item => item.id !== action.payload)]
    default:
      return state
  }
}

export default localStorageReducer
