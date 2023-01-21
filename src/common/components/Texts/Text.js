import styled, { useTh, x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

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
export function Text({ font, isActive, ...properties }) {
  const vuseGradient = useTh('gradient.vuse-gradient-90deg')

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
      <x.pre
        {...properties}
        fontFamily={font}
        color="white"
        opacity={isActive ? 1 : 0.25}
        fontSize="30px"
      >
        abc
      </x.pre>
    </Wrapper>
  )
}

Text.propTypes = {
  font: PropTypes.string.isRequired,
  isActive: PropTypes.bool
}
