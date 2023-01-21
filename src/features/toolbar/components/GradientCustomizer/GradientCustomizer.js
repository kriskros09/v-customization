import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'
import { memo, useEffect } from 'react'

import { useStepsContext } from '../../context'
import { Customizer } from './Customizer'

const GradientCustomizer = memo(function GradientCustomizer({ isPreview }) {
  const [{ gradientCustomizer }, { updateGradientCustomizer }] =
    useStepsContext()

  const { isVisible } = gradientCustomizer

  useEffect(() => {
    if (isPreview && isVisible) {
      updateGradientCustomizer({ action: 'toggle', value: false })
    }
  }, [isPreview, updateGradientCustomizer, isVisible])

  return (
    <x.div
      mb={{ _: 0, betweenld: '25px' }}
      position={{ _: 'absolute', betweenld: 'relative' }}
      top={{ _: '45%', sm: '35%', md: '45%', betweenld: '0' }}
      left={{ _: '0', betweenld: 'unset' }}
      transform
      translateX={{ _: '0', betweenld: '0' }}
      translateY={{ _: '-50%', betweenld: '0' }}
      w={{ _: '20%', sm: '30%', betweenld: 'unset' }}
    >
      {isVisible ? <Customizer /> : null}
    </x.div>
  )
})
GradientCustomizer.propTypes = {
  isPreview: PropTypes.bool
}

export { GradientCustomizer }
