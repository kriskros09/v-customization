import { toolbarSteps } from '@/features/toolbar/constants'
import { useOptionsContext, useStepsContext } from '@/features/toolbar/context'

import { IconButton } from '../IconButton'
export function Methods() {
  const [, { getStepById }] = useStepsContext()
  const { options } = getStepById(toolbarSteps.METHOD)
  const [, stepsActions] = useStepsContext()

  const [
    {
      [toolbarSteps.METHOD]: { selection }
    },
    customizationActions
  ] = useOptionsContext()

  const handleClick = iconKey => {
    customizationActions.update({
      [toolbarSteps.METHOD]: {
        selection: iconKey
      }
    })

    stepsActions.updateStepsOrderedKeys({ update: iconKey, current: selection })
  }
  return (
    <>
      {options.map(option => (
        <IconButton
          key={option.iconKey}
          isActive={selection === option.iconKey}
          label={option.label}
          iconKey={option.iconKey}
          iconHeight={{ _: 7, md: 10 }}
          iconMarginR={{ _: 2.5, md: '15' }}
          iconMarginB={{ _: 0 }}
          onClick={handleClick}
          textTransform="uppercase"
          mx={{ _: 2.5, md: 6 }}
        />
      ))}
    </>
  )
}
