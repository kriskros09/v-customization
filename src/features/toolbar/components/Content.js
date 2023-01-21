import { x } from '@xstyled/styled-components'
import { PropTypes } from 'prop-types'

import { toolbarSteps } from '@/features/toolbar/constants'
import { useStepsContext } from '@/features/toolbar/context'

import { Colors, Devices, Freehand, Methods, Patterns } from './Steps'

function renderCustomizationStep({ stepId }) {
  switch (stepId) {
    case toolbarSteps.METHOD:
      return <Methods />
    case toolbarSteps.COLOR:
      return <Colors />
    case toolbarSteps.PATTERN:
      return <Patterns />
    case toolbarSteps.FREEHAND:
      return <Freehand />
    default:
      return <Devices />
  }
}

function Content() {
  const [{ stepId }] = useStepsContext()
  return (
    <x.div
      h={{ _: '105px', md: '135px', xl: '140px' }}
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {renderCustomizationStep({ stepId })}
    </x.div>
  )
}

Content.propTypes = {
  stepId: PropTypes.oneOf(Object.values(toolbarSteps))
}

export default Content
