import { Show } from './components/Show'
import { Wrapper } from './components/Wrapper'
import { CounterContextProvider } from './context/CounterContext'

export function App() {
  return (
    <CounterContextProvider>
      <Show />
      <Wrapper />
    </CounterContextProvider>
  )
}
