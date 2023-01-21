import { x } from '@xstyled/styled-components'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { AddToCart, Logo, Navigation, ToggleButton } from '@/common/components'
import { useUIContext } from '@/context/index'

import { useCustomizationActions } from '../context'
function CustomizationHeader({ children, ...properties }) {
  const router = useRouter()
  const flexStart = 'flex-start'

  const [{ preview }, dispatch] = useUIContext()

  const handleCustomizationPreview = value => {
    dispatch({
      type: 'screen:preview',
      payload: value
    })
  }

  const { toggleCustomizationMode, initDownload, saveCustomization } =
    useCustomizationActions()

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
      zIndex="5"
      {...properties}
    >
      <AddToCart
        onClick={() => handleCustomizationPreview(true)}
        isPreview={preview}
      />
      <x.div
        display="flex"
        col={1 / 3}
        justifyContent={{ _: flexStart, md: 'center' }}
        flexDirection={{ _: 'column' }}
      >
        <Logo w={{ _: 120, md: 218 }} h="auto" mx={{ _: 0, md: 'auto' }} />
        {router.route === `/how-to` ? null : (
          <ToggleButton
            onToggle={() => toggleCustomizationMode()}
            w="110px"
            mt={6}
            fontSize="0.375rem"
            py="0.7rem"
            px="1.5rem"
            display={{ _: 'block', md: 'none' }}
          />
        )}
      </x.div>
      <Navigation
        onToggle={() => toggleCustomizationMode()}
        onDownloadClick={() => initDownload()}
        onSaveClick={() => saveCustomization()}
      />
      {children}
    </x.header>
  )
}

CustomizationHeader.propTypes = {
  children: PropTypes.node
}

export { CustomizationHeader }
