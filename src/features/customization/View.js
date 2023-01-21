import { x } from '@xstyled/styled-components'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import {
  Footer as CustomizationFooter,
  GradientButton,
  Icon,
  InvertedButton,
  SolidButton,
  View
} from '@/common/components'
import { ToolbarContextProvider } from '@/features/toolbar/context'

const ToolbarView = dynamic(
  () => import('@/features/toolbar').then(module_ => module_.View)
  // console.log('Dynamic View component for Customization page')
)

const CanvasView = dynamic(
  () => import('@/features/canvas').then(module_ => module_.View)
  // console.log('Dynamic Canvas for Customization page')
)

const HeaderView = dynamic(
  () =>
    import('./components/Header').then(module_ => module_.CustomizationHeader)
  // console.log('Dynamic Header for Customization page')
)

import { useUIContext } from '@/context/index'
import { CanvasContextProvider } from '@/features/canvas'

import { CustomizationContextProvider } from './context'

function CustomizationView() {
  const router = useRouter()

  const [{ preview }] = useUIContext()

  const handleSaveDesign = () => {
    router.push('/gallery')
  }

  return (
    <View>
      <CustomizationContextProvider>
        <HeaderView />
        <x.div
          display={{ _: 'none', betweenld: 'flex' }}
          justifyContent="center"
          alignItems="center"
          color="vuse-white"
          my="5"
        >
          <x.div display="flex" alignItems="center">
            {!preview ? (
              <>
                <x.p fontSize="0.625rem" pr={3}>
                  Thanks to the hot-corners, you can
                </x.p>
                <InvertedButton as="p" px={1.5} cursor="initial">
                  <Icon
                    icon="resize"
                    w="19px"
                    h="19px"
                    mr={{ _: 0, md: 2, lg: 3, xl: 2 }}
                  />
                  <x.span textTransform="capitalize">Resize</x.span>
                </InvertedButton>
                <InvertedButton as="p" px={1.5} cursor="initial">
                  <Icon
                    icon="move"
                    w="19px"
                    h="19px"
                    mr={{ _: 0, md: 2, lg: 3, xl: 2 }}
                  />
                  <x.span textTransform="capitalize">Move</x.span>
                </InvertedButton>
                <InvertedButton as="p" px={1.5} cursor="initial">
                  <Icon
                    icon="rotate"
                    w="19px"
                    h="19px"
                    mr={{ _: 0, md: 2, lg: 3, xl: 2 }}
                  />
                  <x.span textTransform="capitalize">Rotate</x.span>
                </InvertedButton>
              </>
            ) : null}
          </x.div>
        </x.div>
        <x.div
          position="relative"
          display="flex"
          flexDirection="column"
          flexGrow={1}
          justifyContent="center"
        >
          {preview && (
            <x.p
              fontSize="1.625rem"
              textTransform="uppercase"
              fontFamily="display"
              fontWeight="700"
              mb={{ _: 14, md: 24, lg: 15, xl: 15, '2xl': 20 }}
              color="white"
              textAlign="center"
              display={{ _: 'none', xl: 'block' }}
            >
              Like the result?
            </x.p>
          )}
          <ToolbarContextProvider>
            <CanvasContextProvider>
              <CanvasView />
              <ToolbarView isPreview={preview} />
            </CanvasContextProvider>
          </ToolbarContextProvider>
          {preview && (
            <>
              <x.p
                fontSize="1.625rem"
                textTransform="uppercase"
                fontFamily="display"
                fontWeight="700"
                my={6}
                color="white"
                textAlign="center"
                display={{ _: 'none', md: 'block', xl: 'none' }}
              >
                Like the result?
              </x.p>
              <x.p
                color="white"
                textAlign="center"
                w={{ _: '95%', lg: '55%', xl: '60%', '2xl': '70%' }}
                mx="auto"
                mt={{ _: 10, md: 6, lg: 6, xl: 6 }}
                mb={{ _: 4, md: 8 }}
              >
                *Note that the colour you select for your product is only about
                90% accurate.
                <br /> Expect a slight difference in colour when you receive
                your device.
              </x.p>
              <x.div
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
              >
                <GradientButton onClick={handleSaveDesign} mr={{ _: 6, md: 4 }}>
                  SAVE TO MY DESIGNS
                </GradientButton>
                <SolidButton>ADD TO CART</SolidButton>
              </x.div>
            </>
          )}
        </x.div>
      </CustomizationContextProvider>
      <CustomizationFooter
        maxH="104px"
        h="full"
        px="6"
        py="2"
        color="white"
      ></CustomizationFooter>
    </View>
  )
}
export { CustomizationView }
