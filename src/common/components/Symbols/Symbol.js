import styled, { useTh, x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

import Symbol1 from './symbol-1.svg'
import Symbol2 from './symbol-2.svg'
import Symbol3 from './symbol-3.svg'
import Symbol4 from './symbol-4.svg'
import Symbol5 from './symbol-5.svg'
import Symbol6 from './symbol-6.svg'
import Symbol7 from './symbol-7.svg'
import Symbol8 from './symbol-8.svg'
import Symbol9 from './symbol-9.svg'
import Symbol10 from './symbol-10.svg'

export const symbolMap = {
  symbol1: Symbol1,
  symbol2: Symbol2,
  symbol3: Symbol3,
  symbol4: Symbol4,
  symbol5: Symbol5,
  symbol6: Symbol6,
  symbol7: Symbol7,
  symbol8: Symbol8,
  symbol9: Symbol9,
  symbol10: Symbol10
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
export function Symbol({ symbol, isActive, ...properties }) {
  const vuseGradient = useTh('gradient.vuse-gradient-90deg')
  const SymbolComponent = symbolMap[symbol]
  if (!SymbolComponent) return null

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
      <x.div w="100%" maxH="40px" maxW="55px" display="flex">
        <SymbolComponent
          {...properties}
          fill="white"
          opacity={isActive ? 1 : 0.25}
          max-height="100%"
        />
      </x.div>
    </Wrapper>
  )
}

Symbol.propTypes = {
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
  symbol: PropTypes.oneOf(Object.keys(symbolMap)).isRequired,
  isActive: PropTypes.bool
}
