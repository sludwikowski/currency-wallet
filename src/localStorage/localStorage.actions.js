import types from './localStorage.types'

export const addItem = payload => {
  return {
    type: types.ADD_ITEM,
    payload
  }
}

export const removeItem = id => {
  return {
    type: types.REMOVE_ITEM,
    payload: id
  }
}
