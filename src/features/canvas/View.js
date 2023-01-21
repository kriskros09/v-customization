import { x } from '@xstyled/styled-components'

import {
  Container as CanvasContainer,
  Icon,
  InvertedButton
} from '@/common/components'
import { useUIContext } from '@/context/index'

import { Canvas } from './components'

function View() {
  const [{ preview }, dispatch] = useUIContext()

  const handleBackToCustomization = value => {
    dispatch({
      type: 'screen:preview',
      payload: value
    })
  }

  return (
    <CanvasContainer mt={{ _: -20, md: -20, betweenld: 0 }} position="relative">
      {preview && (
        <InvertedButton
          fontSize={12}
          position={{ _: 'absolute', lg: 'relative', xl: 'absolute' }}
          w="100%"
          maxWidth={{ _: '60px', md: '20%' }}
          onClick={() => handleBackToCustomization(false)}
          left={{ _: '10%', lg: '0', md: 0 }}
          flexDirection={{ _: 'column', md: 'row' }}
          alignItems="center"
          whiteSpace="normal"
        >
          <Icon
            icon="arrow"
            width="17px"
            mr={{ _: '0', md: '5' }}
            mb={{ _: '3', md: '0' }}
            fill="white"
          />
          Edit my design
        </InvertedButton>
      )}
      <x.div
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Canvas />
      </x.div>
    </CanvasContainer>
  )
}

View.propTypes = {}

export { View }
