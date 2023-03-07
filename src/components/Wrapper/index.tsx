import { Button } from '../Button'
import { useGlobal } from '../../context/hooks/useGlobal'

export const Wrapper = () => {
  const { btnDecrement, btnAdd, btnReset, decrement, reset, increment } = useGlobal()

  return (
    <div className='flex gap-4'>
      <Button className='bg-red-500' onClick={decrement}>
        {btnDecrement}
      </Button>
      <Button onClick={reset}>{btnReset}</Button>
      <Button className='bg-green-500' onClick={increment}>
        {btnAdd}
      </Button>
    </div>
  )
}
