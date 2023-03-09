import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

export function useCounter() {
  const context = useContext(CounterContext)

  return context
}
