import styled, { useTh } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

import Pattern1 from './pattern-1.svg'
import Pattern2 from './pattern-2.svg'
import Pattern3 from './pattern-3.svg'
import Pattern4 from './pattern-4.svg'
import Pattern5 from './pattern-5.svg'
import Pattern6 from './pattern-6.svg'
// import Pattern7 from './pattern-7.svg'

export const patternMap = {
  pattern1: Pattern1,
  pattern2: Pattern2,
  pattern3: Pattern3,
  pattern4: Pattern4,
  pattern5: Pattern5,
  pattern6: Pattern6
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

export function Pattern({ pattern, isActive, ...properties }) {
  const vuseGradient = useTh('gradient.vuse-gradient-90deg')
  const PatternComponent = patternMap[pattern]
  if (!PatternComponent) return null

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
      <PatternComponent
        {...properties}
        fill="white"
        opacity={isActive ? 1 : 0.25}
      />
    </Wrapper>
  )
}

Pattern.propTypes = {
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
  fill: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  pattern: PropTypes.oneOf(Object.keys(patternMap)).isRequired,
  isActive: PropTypes.bool
}
