import { useReducer } from 'react'

function reducer(currentState = {}, nextState = {}) {
  return {
    ...currentState,
    ...nextState,
  }
}

function useSetState(initialState = {}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setState = (newState) => dispatch(newState)

  return [state, setState]
}

export default useSetState
