import { useTh, x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export default function GradientButton({ children, ...properties }) {
  const vuseGradient = useTh('BorderGradient.vuse-gradient')
  return (
    <x.button
      background={vuseGradient}
      borderColor="transparent"
      borderWidth="0.063rem"
      borderStyle="solid"
      alignItems="center"
      outline={{ focus: 'none' }}
      py="4"
      px="5"
      borderRadius="3xl"
      whiteSpace="nowrap"
      letterSpacing="1px"
      fontSize="xs"
      fontFamily="display"
      fontWeight="500"
      color="white"
      textTransform="uppercase"
      {...properties}
    >
      {children}
    </x.button>
  )
}

GradientButton.propTypes = {
  children: PropTypes.node,
  iconAfter: PropTypes.bool
}
