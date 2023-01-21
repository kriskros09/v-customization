import { x } from '@xstyled/styled-components'
// import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import useWindowDimensions from '@/common/hooks/useWindowDimensions'

export default function IntroVideo({ isSkipped }) {
  const viewport = useWindowDimensions()

  return (
    <x.div h="100vh" cursor="pointer" onClick={isSkipped} overflow="hidden">
      <video autoPlay playsInline muted onEnded={isSkipped}>
        <source
          src={
            viewport.width <= 640
              ? '/video/2021-hubvid-mobile.mp4'
              : '/video/2021-hubvid-desktop.mp4'
          }
          type="video/mp4"
        />
      </video>
    </x.div>
  )
}

IntroVideo.propTypes = {
  video: PropTypes.node,
  isSkipped: PropTypes.func
}
