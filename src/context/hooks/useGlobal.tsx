import { useContext } from 'react'
import { GlobalContext } from '../AppContext'
import { Counter } from '../AppContext/data'

export interface UseGlobalReturn extends Counter {
  decrement: () => void
  increment: () => void
  reset: () => void
}

export const useGlobal = (): UseGlobalReturn => {
  const {
    state: { counter, btnDecrement, btnAdd, btnReset },
    setState,
  } = useContext(GlobalContext)

  const decrement = () => {
    setState((prevState: any) => ({ ...prevState, counter: counter - 1 }))
  }

  const increment = () => {
    setState((prevState: any) => ({ ...prevState, counter: counter + 1 }))
  }

  const reset = () => {
    setState((prevState: any) => ({ ...prevState, counter: 0 }))
  }

  return {
    counter,
    btnDecrement,
    btnAdd,
    btnReset,
    decrement,
    increment,
    reset,
  }
}
