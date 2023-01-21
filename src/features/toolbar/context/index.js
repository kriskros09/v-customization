import { OptionsContextProvider } from './options'
import { StepsContextProvider } from './steps'

function ToolbarContextProvider({ children }) {
  return (
    <OptionsContextProvider>
      <StepsContextProvider>{children}</StepsContextProvider>
    </OptionsContextProvider>
  )
}

export { ToolbarContextProvider }

export {
  useOptionsActions,
  useOptionsContext,
  useOptionsState
} from './options'
export { useStepsContext } from './steps'
