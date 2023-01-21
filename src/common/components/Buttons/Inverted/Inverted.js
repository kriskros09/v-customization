import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export default function InvertedButton({ children, iconAfter, ...properties }) {
  return (
    <x.button
      bg="transparent"
      borderColor="transparent"
      display="flex"
      flexDirection={iconAfter ? 'row-reverse' : 'row'}
      justifyContent="center"
      alignItems="center"
      paddingy="calc(0.5em - 1px)"
      outline={{ focus: 'none' }}
      paddingX="4"
      whiteSpace="nowrap"
      letterSpacing="1px"
      fontSize="0.625rem"
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

InvertedButton.propTypes = {
  children: PropTypes.node,
  iconAfter: PropTypes.bool
}
