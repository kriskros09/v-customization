import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export default function SolidButton({ children, ...properties }) {
  return (
    <x.button
      bg="white"
      color="vuse-black"
      py="4"
      px="5"
      borderRadius="3xl"
      fontSize="xs"
      letterSpacing="1px"
      fontFamily="display"
      fontWeight="500"
      textTransform="uppercase"
      outline={{ focus: 'none' }}
      {...properties}
    >
      {children}
    </x.button>
  )
}

SolidButton.propTypes = {
  children: PropTypes.node
}
