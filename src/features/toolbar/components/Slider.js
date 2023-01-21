import 'swiper/css'
import 'swiper/css/navigation'

import { x } from '@xstyled/styled-components'
import styled from '@xstyled/styled-components'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { Navigation } from 'swiper'
import { Swiper } from 'swiper/react'

import { Icon } from '@/common/components'

const CustomSwiper = styled(Swiper)`
  height: 100%;
  .swiper-button-next. swiper-button-prev {
    &:after {
      font-size: 20px;
    }
  }
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-slide {
    height: auto;

    @keyframes fadeEffect {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation: fadeEffect 0.2s;
  }
`
export function Slider({ children, display, ...properties }) {
  const swiperReference = useRef(null)
  const navigationPreviousReference = useRef(null)
  const navigationNextReference = useRef(null)

  return (
    <x.div
      position="relative"
      px={{ _: 0, xl: '60px' }}
      display={display}
      w="full"
      h="100%"
    >
      <x.button
        ref={navigationPreviousReference}
        title="previous step"
        w="20"
        h="10"
        alignItems="center"
        justifyContent="center"
        bg="unset"
        position="absolute"
        left="-35px"
        top={{
          _: 'calc(50% - 2.5px)',
          md: 'calc(50% - 7px)',
          xl: 'calc(50% - 8.5px)'
        }}
        transform
        rotate="90"
        translateY="-50%"
        opacity={{ _: 1, disabled: 0.25 }}
        display={{ _: 'none', xl: 'flex' }}
      >
        <Icon icon="carret" width={{ _: '12px', md: '20px' }} fill="white" />
      </x.button>

      <x.button
        ref={navigationNextReference}
        title="next step"
        w="20"
        h="10"
        alignItems="center"
        justifyContent="center"
        bg="unset"
        position="absolute"
        right="-35px"
        top={{
          _: 'calc(50% - 2.5px)',
          md: 'calc(50% - 7px)',
          xl: 'calc(50% - 8.5px)'
        }}
        transform
        rotate="-90"
        translateY="-50%"
        opacity={{ _: 1, disabled: 0.25 }}
        display={{ _: 'none', xl: 'flex' }}
      >
        <Icon icon="carret" width={{ _: '12px', md: '20px' }} fill="white" />
      </x.button>

      <CustomSwiper
        modules={[Navigation]}
        shortSwipes={false}
        spaceBetween={15}
        slidesPerView={6}
        freeMode={true}
        ref={swiperReference}
        navigation={{
          prevEl: navigationPreviousReference.current,
          nextEl: navigationNextReference.current
        }}
        onBeforeInit={swiper => {
          swiper.params.navigation.prevEl = navigationPreviousReference.current
          swiper.params.navigation.nextEl = navigationNextReference.current
        }}
        breakpoints={{
          640: {
            slidesPerView: 8,
            freeMode: true
          },
          1024: {
            slidesPerView: 11,
            spaceBetween: 40
          },
          1280: {
            slidesPerView: 13,
            spaceBetween: 40
          }
        }}
        {...properties}
      >
        {children}
      </CustomSwiper>
    </x.div>
  )
}

Slider.propTypes = {
  children: PropTypes.node,
  display: PropTypes.oneOf(['block', 'none'])
}
