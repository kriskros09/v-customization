import dynamic from 'next/dynamic'

import {
  Container as HowToContainer,
  Footer,
  Header,
  View as HowToView
} from '@/common/components'

const HelpSlider = dynamic(
  () => import('./components/HowToSlider')
  // console.log('Dynamic Slider for how-to page')
)

export default function View() {
  return (
    <HowToView>
      <Header />
      <HowToContainer
        justifyContent={{ _: 'flex-start', md: 'center' }}
        mt={{ _: 9, md: 0 }}
      >
        <HelpSlider />
      </HowToContainer>
      <Footer />
    </HowToView>
  )
}
