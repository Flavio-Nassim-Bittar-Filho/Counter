import { createContext, useState } from 'react'
import { globalState } from './data'

export const GlobalContext = createContext<any>(null)

export const AppContext = ({ children }: any) => {
  const [state, setState] = useState(globalState)

  return (
    <GlobalContext.Provider value={{ setState, state }}>
      {children}
    </GlobalContext.Provider>
  )
}
