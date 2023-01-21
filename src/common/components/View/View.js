import { x } from '@xstyled/styled-components'
import { PropTypes } from 'prop-types'
function View({ children }) {
  return (
    <x.div
      bg="vuse-black"
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      {children}
    </x.div>
  )
}

View.propTypes = {
  children: PropTypes.node.isRequired
}

export default View
