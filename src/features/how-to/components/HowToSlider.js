// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { x } from '@xstyled/styled-components'
import styled from '@xstyled/styled-components'
import { useRouter } from 'next/router'
import SwiperCore, { Pagination } from 'swiper'
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react'

// install Swiper modules
SwiperCore.use([Pagination])

// Hookes
import { InvertedButton } from '@/common/components'
import { HowToSlides } from '@/common/constants/HowToSlides'
import useWindowDimensions from '@/common/hooks/useWindowDimensions'

const CustomSwiper = styled(Swiper)`
  margin-bottom: 2.5rem;
  swiper-pagination {
    bottom: 0;
  }
  .swiper-pagination-bullet {
    background-color: transparent;
    border: 1.5px solid white;
    width: 15px;
    height: 15px;
    opacity: 1;
    margin: 0 0.625rem !important;

    &.swiper-pagination-bullet-active {
      border: 0;
      background: linear-gradient(
          344.57deg,
          #f05364 1.77%,
          #d48a46 27.87%,
          #bfb021 52.03%,
          #5ea774 73.3%,
          #00b3bd 98.43%
        ),
        #ffffff;
    }
  }

  .swiper-slide {
    height: auto;
  }
`

export default function HowToSlider({ ...properties }) {
  const router = useRouter()
  const viewport = useWindowDimensions()

  const handleClick = () => {
    router.push('/customization')
  }

  return (
    <x.div
      w={{ _: '100%', lg: '70%', xl: '60%', '2xl': '50%' }}
      mx="auto"
      color="white"
      {...properties}
      textAlign="center"
    >
      <x.p
        fontSize="1.625rem"
        textTransform="uppercase"
        fontFamily="display"
        fontWeight="700"
        mb={{ _: 14, md: 8 }}
      >
        Quick how-to
      </x.p>
      <CustomSwiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={swiper => console.log(swiper)}
      >
        {Object.keys(HowToSlides).map((slides, index) => (
          <SwiperSlide key={index}>
            <x.div
              h="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <x.img
                mx="auto"
                mb={{ _: 10 }}
                w={{ _: 'auto', md: 'auto' }}
                src={
                  viewport.width <= 640
                    ? HowToSlides[`${slides}`].mobileImg
                    : HowToSlides[`${slides}`].img
                }
                alt="slider tutorial"
              />
              <x.p
                fontSize={{ _: 'xl', md: '1.375rem' }}
                fontFamily="display"
                mx={{ _: 5 }}
                mb={{ _: 14, md: 14 }}
                fontWeight="400"
              >
                {HowToSlides[`${slides}`].content}
              </x.p>
            </x.div>
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <InvertedButton
        // as="a"
        // download
        // href="#"
        mx="auto"
        color="white"
        fontSize={{ _: '1.375rem', md: '1.5rem' }}
        fontFamily="display"
        fontWeight="400"
        textTransform="initial"
        textDecoration="underline"
        onClick={handleClick}
      >
        <x.span>Skip Tutorial</x.span>
      </InvertedButton>
    </x.div>
  )
}

// HowToSlider.propTypes = {
//   children: PropTypes.node
// }
