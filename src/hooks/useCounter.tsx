import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

export const useCounter = () => {
  const context = useContext(CounterContext)

  return context
}
