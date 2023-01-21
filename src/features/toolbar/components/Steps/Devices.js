import { toolbarSteps } from '@/features/toolbar/constants'
import { useOptionsContext, useStepsContext } from '@/features/toolbar/context'

import { IconButton } from '../IconButton'

export function Devices() {
  const [, { getStepById }] = useStepsContext()
  const { options } = getStepById(toolbarSteps.DEVICE)

  const [
    {
      [toolbarSteps.DEVICE]: { selection }
    },
    customizationActions
  ] = useOptionsContext()

  const handleClick = iconKey => {
    customizationActions.update({
      [toolbarSteps.DEVICE]: {
        selection: iconKey
      }
    })
  }
  // TODO device img instead of device icon in render mode
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
          iconMarginB={{ _: 2, md: 0 }}
          onClick={handleClick}
          flexDirection={{ _: 'column', md: 'row' }}
          justifyContent="center"
          maxW={'50%'}
        />
      ))}
    </>
  )
}
