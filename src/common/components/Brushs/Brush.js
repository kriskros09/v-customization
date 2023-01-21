import styled, { useTh, x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

import Brush1 from './brush-1.png'
import Brush2 from './brush-1.png'
import Brush3 from './brush-1.png'
import Brush4 from './brush-1.png'

const brushMap = {
  brush1: Brush1,
  brush2: Brush2,
  brush3: Brush3,
  brush4: Brush4
}

const Wrapper = styled.divBox`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    background: ${properties => properties.gradient};
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    opacity: ${properties => (properties.isActive ? '1' : '0')};
  }
`

export function Brush({ brush, isActive, ...properties }) {
  const vuseGradient = useTh('gradient.vuse-gradient-90deg')
  const BrushImg = brushMap[brush]
  if (!BrushImg) return null

  return (
    <Wrapper
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      pb={{ _: '5px', md: '14px', xl: '17px' }}
      isActive={isActive}
      gradient={vuseGradient}
    >
      <x.img
        src={BrushImg.src}
        maxW="64px"
        {...properties}
        opacity={isActive ? 1 : 0.25}
      />
    </Wrapper>
  )
}

Brush.propTypes = {
  fill: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  brush: PropTypes.oneOf(Object.keys(brushMap)).isRequired,
  isActive: PropTypes.bool
}
