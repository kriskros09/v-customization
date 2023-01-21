import styled, { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

import Fill1 from './fill-1.png'
import Fill2 from './fill-2.png'
import Fill3 from './fill-3.png'
import Fill4 from './fill-4.png'

export const fillMap = {
  fill1: Fill1,
  fill2: Fill2,
  fill3: Fill3,
  fill4: Fill4
}

const Button = styled.buttonBox`
  position: relative;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    background: linear-gradient(#141414, #141414) padding-box,
      linear-gradient(
          110deg,
          #f05364 39.28%,
          #d48a46 55.67%,
          #bfb021 70.85%,
          #5ea774 84.21%,
          #00b3bd 100%
        )
        border-box;
    width: 100%;
    height: 100%;
    border: transparent 1px solid;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    opacity: ${properties => (properties.isActive ? '1' : '0')};
    z-index: -1;

    @media (min-width: md) {
      width: 100%;
      height: 100%;
      border: transparent 2px solid;
    }
  }
`

export function Fill({ fill, isActive, ...properties }) {
  const FillOption = fillMap[fill]

  if (!FillOption) return null
  return (
    <x.div
      display="flex"
      h="100%"
      w="100%"
      alignItems="center"
      pb={{ _: '5px', md: '14px', xl: '17px' }}
    >
      <Button
        background="transparent"
        p={0}
        w={{
          _: '30px',
          md: '54px'
        }}
        h={{
          _: '30px',
          md: '54px'
        }}
        borderRadius="full"
        overflow="hidden"
        isActive={isActive}
        {...properties}
      >
        <x.div
          backgroundImage={`url(${FillOption.src})`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          w="100%"
          h="100%"
          borderRadius="100%"
          transform
          scale={isActive ? 0.8 : 1}
        />
      </Button>
    </x.div>
  )
}

Fill.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  viewBox: PropTypes.string,
  fill: PropTypes.oneOf(Object.keys(fillMap)).isRequired,
  isActive: PropTypes.bool
}
