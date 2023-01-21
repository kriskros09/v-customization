import { x } from '@xstyled/styled-components'
import { useRouter } from 'next/router'

import {
  Container as PreviewContainer,
  Footer,
  GradientButton,
  Header,
  SolidButton,
  View as PreviewView
} from '@/common/components'

export default function View() {
  const router = useRouter()
  const handleSaveDesign = () => {
    router.push('/gallery')
  }
  return (
    <PreviewView>
      <Header />
      <PreviewContainer
        justifyContent={{ _: 'flex-start', lg: 'center' }}
        mt={{ _: 9, md: 14 }}
      >
        <x.div
          w={{ _: '100%', md: '50%', lg: '100%', xl: '40%', '2xl': '50%' }}
          mx="auto"
        >
          <x.p
            fontSize="1.625rem"
            textTransform="uppercase"
            fontFamily="display"
            fontWeight="700"
            mb={{ _: 14, md: 24, lg: 15, xl: 20, '2xl': 24 }}
            color="white"
            textAlign="center"
            display={{ _: 'none', xl: 'block' }}
          >
            Like the result?
          </x.p>
          {/* <x.img
            w={{ _: 'auto', xl: '100%' }}
            mx="auto"
            src={}
            alt="Preview vape"
          /> */}
          <x.p
            fontSize="1.625rem"
            textTransform="uppercase"
            fontFamily="display"
            fontWeight="700"
            mb={6}
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
            mt={{ _: 10, md: 6, lg: 6, xl: 14 }}
            mb={{ _: 4, md: 8 }}
          >
            *Note that the colour you select for your product is only about 90%
            accurate. Expect a slight difference in colour when you receive your
            device.
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
        </x.div>
      </PreviewContainer>
      <Footer />
    </PreviewView>
  )
}
