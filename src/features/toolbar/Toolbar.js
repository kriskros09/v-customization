import { useTh, useTransition, x } from '@xstyled/styled-components'
import { memo } from 'react'

import { Icon, InvertedButton } from '@/common/components'
import { ChangeCustomizationMethod } from '@/common/components'
import { useUIContext } from '@/context/index'

import { useCustomizationActions } from '../customization/context'
import Content from './components/Content'
// import { useStepsContext } from '../../context/steps/index'
import { useOptionsContext, useStepsContext } from './context'

const Toolbar = memo(function Toolbar() {
  const vuseGradient = useTh('gradient.vuse-gradient-90deg')
  const transitionTransform = useTransition('transform')
  const [
    { currentStep, stepId, index, canGoNext, canGoPrevious, totalSteps },
    stepsActions
  ] = useStepsContext()

  const [{ isToolbarVisible, ...options }, { toggleToolbar, reset }] =
    useOptionsContext()
  const [, dispatch] = useUIContext()

  const { resetCustomization } = useCustomizationActions()

  const handlePreviousClick = () => {
    if (index === 2) {
      dispatch({
        type: 'modal:open',
        payload: {
          type: 'default',
          content: <ChangeCustomizationMethod />
        }
      })
    } else {
      stepsActions.prev()
    }
  }

  return (
    <x.div pt={{ _: 2.5, md: 0 }}>
      <x.div
        row
        alignItems="center"
        justifyContent={{ _: 'center', md: 'space-between' }}
        py={{ _: 0, md: 3.5 }}
        px={{ _: 2.5, md: '15' }}
        position="relative"
      >
        {/* minimize button */}
        <x.button
          bg="white"
          title="minimize"
          w="22"
          h="3px"
          position="absolute"
          top={0}
          left="50%"
          transform
          translateX="-50%"
          translateY="-100%"
          display={{ _: 'block', md: 'none' }}
          onClick={() => toggleToolbar()}
        />
        <x.div
          display={{ _: 'none', md: 'flex' }}
          col={1 / 3}
          px={{ _: 2.5, md: '15' }}
        >
          {/* minimize button */}
          <x.button
            bg="white"
            title="minimize"
            w="10"
            h="10"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={() => toggleToolbar()}
          >
            <Icon
              icon="carret"
              width={'20px'}
              fill="vuse-black"
              transform
              rotate={isToolbarVisible ? '0deg' : '180deg'}
              transition={transitionTransform}
            />
          </x.button>
        </x.div>

        <x.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          col={1 / 3}
          px={{ _: 2.5, md: '15' }}
        >
          <x.button
            title="previous step"
            w="20"
            h="10"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="unset"
            opacity={{ _: '1', disabled: '0.25' }}
            disabled={!canGoPrevious}
            transform
            rotate="90"
            onClick={() => handlePreviousClick()}
          >
            <Icon
              icon="carret"
              width={{ _: '12px', md: '20px' }}
              fill="white"
            />
          </x.button>
          <x.p
            textAlign="center"
            whiteSpace="nowrap"
            textTransform="uppercase"
            color="white"
            fontFamily="display"
            fontWeight="bold"
            fontSize={{ _: 10, md: 16 }}
            mx={{ _: 4, lg: '90' }}
          >
            {currentStep.label}
            <x.span
              fontWeight="normal"
              display="inline-block"
              ml={{ _: 4, md: '25' }}
            >
              {`${index + 1}/${totalSteps}`}
            </x.span>
          </x.p>
          <x.button
            title="next step"
            w="20"
            h="10"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="unset"
            opacity={{ _: '1', disabled: '0.25' }}
            disabled={!canGoNext}
            transform
            rotate="-90"
            onClick={() => stepsActions.next(options[stepId].selection)}
          >
            <Icon
              icon="carret"
              width={{ _: '12px', md: '20px' }}
              fill="white"
            />
          </x.button>
        </x.div>

        <x.div
          display={{ _: 'none', md: 'flex' }}
          col={1 / 3}
          px={2}
          justifyContent="flex-end"
          alignSelf="flex-end"
        >
          <InvertedButton
            color="white"
            onClick={() => {
              reset()
              stepsActions.reset()
              resetCustomization()
            }}
          >
            <Icon
              icon="undo"
              width="12px"
              mr={{ _: 2.5, md: '15' }}
              fill="white"
            />
            start over
          </InvertedButton>
        </x.div>
      </x.div>
      <x.div w="100%" h="3px" background={vuseGradient}></x.div>
      <x.div
        h={isToolbarVisible ? { _: '105px', md: '135px', xl: '140px' } : '0px'}
        transition="height ease-in-out 0.5s"
        overflow="hidden"
      >
        <Content />
      </x.div>
    </x.div>
  )
})

export { Toolbar }
