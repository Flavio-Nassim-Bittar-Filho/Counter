import { useGlobal } from '../../context/hooks/useGlobal'

export const Show = () => {
  const { counter } = useGlobal()
  return <h1 className='text-8xl font-light'>{counter}</h1>
}
