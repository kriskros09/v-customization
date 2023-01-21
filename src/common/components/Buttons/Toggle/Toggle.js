import { useTh, useTransition, x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

export default function ToggleButton({ children, onToggle, ...properties }) {
  const vuseGradient = useTh('colors.vuse-gradient')
  const transitionLeft = useTransition('left')
  const transitionPadding = useTransition('padding')
  const [toggled, setToggled] = useState(false)
  return (
    <x.button
      onClick={() => {
        setToggled(!toggled)
        onToggle && onToggle()
      }}
      position="relative"
      textTransform="uppercase"
      outline={{ focus: 'none' }}
      bg="white"
      color="vuse-black"
      py={4}
      px={10}
      fontSize="0.375rem"
      borderRadius="3xl"
      fontFamily="display"
      fontWeight="500"
      letterSpacing="0.037rem"
      {...properties}
    >
      <x.div
        w={{ _: '1.188rem', md: '2rem' }}
        h={{ _: '1.188rem', md: '2rem' }}
        borderRadius="full"
        bg={!toggled && 'vuse-gray'}
        background={toggled && `linear-gradient(${vuseGradient})`}
        position="absolute"
        left={
          toggled
            ? { _: '5.4rem', md: '6.5rem' }
            : { _: '0.3rem', md: '0.3rem' }
        }
        top="50%"
        transform="translateY(-50%)"
        transition={transitionLeft}
      />
      <x.span
        p={toggled ? '0 0.438rem 0 0' : '0 0 0 0.438rem'}
        transition={transitionPadding}
      >
        {toggled ? 'Render mode' : 'Design Mode'}
      </x.span>
      {children}
    </x.button>
  )
}

ToggleButton.propTypes = {
  children: PropTypes.node,
  Title: PropTypes.string,
  toggled: PropTypes.bool,
  onToggle: PropTypes.func
}
