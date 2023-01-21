import { x } from '@xstyled/styled-components'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { AddToCart, Logo, Navigation, ToggleButton } from '@/common/components'

function Header({ children, onCustomizationModeToggle, ...properties }) {
  const router = useRouter()
  const flexStart = 'flex-start'
  return (
    <x.header
      display="flex"
      flexDirection={{ _: 'row', sm: 'row', md: 'row-reverse' }}
      justifyContent="space-between"
      alignItems={{ _: flexStart, md: flexStart }}
      px={{ _: 5, sm: 6 }}
      pt={{ _: 5, sm: 8 }}
      pb={0}
      color="white"
      {...properties}
    >
      <AddToCart />
      <x.div
        display="flex"
        col={1 / 3}
        justifyContent={{ _: flexStart, md: 'center' }}
        flexDirection={{ _: 'column' }}
      >
        <Logo w={{ _: 120, md: 218 }} h="auto" mx={{ _: 0, md: 'auto' }} />
        {router.route === `/how-to` ? null : (
          <ToggleButton
            w="110px"
            mt={6}
            fontSize="0.375rem"
            py="0.7rem"
            px="1.5rem"
            display={{ _: 'block', md: 'none' }}
            onClick={onCustomizationModeToggle}
          />
        )}
      </x.div>
      <Navigation />
      {children}
    </x.header>
  )
}

Header.propTypes = {
  children: PropTypes.node,
  onCustomizationModeToggle: PropTypes.func
}

export default Header
