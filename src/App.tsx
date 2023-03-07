import { Show } from './components/Show'
import { Wrapper } from './components/Wrapper'
import { AppContext } from './context/AppContext'

export const App = () => {
  return (
    <AppContext>
      <Show />
      <Wrapper />
    </AppContext>
  )
}
