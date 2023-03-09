import { Show } from './components/Show'
import { Wrapper } from './components/Wrapper'
import { CounterContextProvider } from './context/CounterContext'

export const App = () => {
  return (
    <CounterContextProvider>
      <Show />
      <Wrapper />
    </CounterContextProvider>
  )
}
