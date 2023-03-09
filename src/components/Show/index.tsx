import { useCounter } from '../../hooks/useCounter'

export function Show() {
  const { counter } = useCounter()
  return <h1 className='text-8xl font-light'>{counter}</h1>
}
