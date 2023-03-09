import { Button } from '../Button'
import { useCounter } from '../../hooks/useCounter'

export function Wrapper() {
  const { decrement, reset, increment } = useCounter()

  return (
    <div className='flex gap-4 mt-4'>
      <Button className='bg-red-500' onClick={decrement}>
        -
      </Button>
      <Button onClick={reset}>0</Button>
      <Button className='bg-green-500' onClick={increment}>
        +
      </Button>
    </div>
  )
}
