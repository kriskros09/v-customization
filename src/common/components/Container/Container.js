import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

import { useUIContext } from '@/context/index'

function Container({ children, ...properties }) {
  const [{ preview }] = useUIContext()
  return (
    <x.main
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flexGrow={preview ? 0 : 1}
      pb="50px"
      {...properties}
    >
      {children}
    </x.main>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
