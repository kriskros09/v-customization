import { x } from '@xstyled/styled-components'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { Icon, InvertedButton, ToggleButton } from '@/common/components'
import { useUIContext } from '@/context/index'

// Import Exit modal dynamicly on click ref func handleExit
const DynamicModal = dynamic(() =>
  import('@/common/components/Modal/Content').then(module => module.ExitModal)
)

function Navigation({ onToggle, onDownloadClick, onSaveClick }) {
  const router = useRouter()
  const [{ modal }, dispatch] = useUIContext()

  const handleHelpRequest = () => {
    router.push('/how-to')
  }

  // const handleAddGallery = () => {
  //   router.push('/gallery')
  // }

  const handleExit = () => {
    if (modal.isOpen) {
      dispatch({ type: 'modal:close' })
    } else {
      dispatch({
        type: 'modal:open',
        payload: { type: 'default', content: <DynamicModal /> }
      })
    }
  }

  const handleCustomizationPreview = value => {
    dispatch({
      type: 'screen:preview',
      payload: value
    })
  }

  const flexStart = 'flex-start'
  return (
    <x.div col={{ _: 1 / 2, md: 1 / 3 }}>
      <x.div
        display="flex"
        justifyContent={{ _: 'flex-end', md: flexStart }}
        flexDirection={{ _: 'row', md: 'column', betweenld: 'row' }}
        flexWrap="wrap"
        alignItems={{
          _: 'center',
          md: flexStart,
          xl: 'center'
        }}
      >
        <InvertedButton
          onClick={onDownloadClick}
          color="white"
          textDecoration="none"
          px={1.5}
          mb={{ _: 0, md: 4, lg: 4, xl: 0 }}
        >
          <Icon
            icon="download"
            width={{ _: 21, md: 17 }}
            mr={{ _: 0, md: 2, lg: 3, xl: 2 }}
          />
          <x.span display={{ _: 'none', md: 'block' }}>Download</x.span>
        </InvertedButton>
        <InvertedButton
          onClick={onSaveClick}
          color="white"
          mb={{ _: 0, md: 4, lg: 4, xl: 0 }}
        >
          <Icon
            icon="bookmark"
            width={{ _: 21, md: 17 }}
            mr={{ _: 0, md: 2, lg: 3, xl: 2 }}
          />
          <x.span display={{ _: 'none', md: 'block' }}>
            save & add to gallery
          </x.span>
        </InvertedButton>
        <InvertedButton
          onClick={handleHelpRequest}
          color="white"
          mb={{ _: 0, md: 4, lg: 4, xl: 0 }}
        >
          <Icon
            icon="help"
            width={{ _: 21, md: 17 }}
            mr={{ _: 0, md: 2, lg: 3, xl: 2 }}
            fill="white"
          />
          <x.span display={{ _: 'none', md: 'block' }}>help</x.span>
        </InvertedButton>
        <InvertedButton onClick={handleExit} color="white">
          <Icon
            icon="exit"
            width={{ _: 21, md: 17 }}
            mr={{ _: 0, md: 2, lg: 3, xl: 2 }}
          />
          <x.span display={{ _: 'none', md: 'block' }}>Exit</x.span>
        </InvertedButton>
        <InvertedButton color="white" display={{ _: 'block', md: 'none' }}>
          <Icon
            icon="cart"
            width={{ _: 21, md: '17' }}
            onClick={() => handleCustomizationPreview(true)}
          />
        </InvertedButton>
      </x.div>
      <x.div mt={{ _: 0, md: 4 }}>
        {router.route === `/how-to` ? (
          <ToggleButton display="none" />
        ) : (
          <ToggleButton
            display={{ _: 'none', md: 'block' }}
            onToggle={onToggle}
          />
        )}
      </x.div>
    </x.div>
  )
}

Navigation.propTypes = {
  onDownloadClick: PropTypes.func,
  onSaveClick: PropTypes.func
}

export default Navigation
