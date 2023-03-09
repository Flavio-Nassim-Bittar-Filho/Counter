import { createContext, ReactNode, useCallback, useState } from 'react'

interface CounterContext {
  counter: number
  decrement: () => void
  increment: () => void
  reset: () => void
}

export const CounterContext = createContext({} as CounterContext)

export const CounterContextProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState(0)

  const decrement = useCallback(() => {
    setCounter((prevState) => prevState - 1)
  }, [])

  const increment = useCallback(() => {
    setCounter((prevState) => prevState + 1)
  }, [])

  const reset = useCallback(() => {
    setCounter(0)
  }, [])

  return <CounterContext.Provider value={{ counter, decrement, increment, reset }}>{children}</CounterContext.Provider>
}
