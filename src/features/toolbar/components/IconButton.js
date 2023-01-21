import { useTh, x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

import { Icon } from '@/common/components'

function IconButton({
  isActive,
  onClick,
  iconKey,
  label,
  iconHeight = '40px',
  iconMarginR = { _: 2.5, md: '15' },
  iconMarginB = 0,
  ...properties
}) {
  const gradientBorder = useTh('BorderGradient.vuse-gradient-2')
  return (
    <x.button
      background={isActive ? gradientBorder : 'transparent'}
      display="flex"
      alignItems="center"
      letterSpacing="1px"
      fontSize={{ _: 'xs', md: 'sm' }}
      fontFamily="display"
      fontWeight="500"
      whiteSpace="nowrap"
      color="white"
      mx={{ _: 2.5, md: 12 }}
      outline={{ focus: 'none' }}
      opacity={isActive ? 1 : 0.25}
      onClick={() => onClick(iconKey)}
      borderStyle="solid"
      borderBottomWidth={4}
      borderBottomColor="transparent"
      h="full"
      {...properties}
    >
      <Icon
        icon={iconKey}
        width="auto"
        maxW={'100%'}
        height={iconHeight}
        mr={iconMarginR}
        mb={iconMarginB}
      />
      {label}
    </x.button>
  )
}

IconButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  iconKey: PropTypes.string,
  iconHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  iconMarginB: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  iconMarginR: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  label: PropTypes.string
}

export { IconButton }
