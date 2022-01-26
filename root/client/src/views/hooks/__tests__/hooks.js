import { renderHook, act } from '@testing-library/react-hooks'

import useSetState from '../useSetState'

describe('useSetState', () => {
  test('Object values should be equal', () => {
    const { result } = renderHook(useSetState)
    const [state, setState] = result.current

    act(() =>
      setState({
        name: 'Suresh',
      })
    )

    expect(state).toBe({
      name: 'Suresh',
    })
  })
})
