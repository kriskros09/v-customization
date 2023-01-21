// import { CustomizationContextProvider } from '@/features/customization/context/CustomizationContext'
import CombineContexts from '@/utils/combine-context'

import { ErrorContextProvider } from './ErrorContext/ErrorContext'
import { UIContextProvider } from './UIContext/UIContext'

export default CombineContexts(UIContextProvider, ErrorContextProvider)
