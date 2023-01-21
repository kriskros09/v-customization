import 'rc-slider/assets/index.css'

import { useBreakpoint, useDown, x } from '@xstyled/styled-components'
import { Handle, Range } from 'rc-slider'
import { useEffect, useState } from 'react'

import { Icon, SolidButton } from '@/common/components'
import { Plus } from '@/common/components/Icons/Plus'
import { useCanvasContext } from '@/features/canvas/context'
import { CanvasDimensions } from '@/features/canvas/utils'
import { gradientDefault } from '@/features/toolbar/constants'

import { useOptionsContext, useStepsContext } from '../../context'
import dashedBackground from './dashedBackground.png'
import dashedBackgroundV from './dashedBackgroundV.png'

const marks = {
  0: undefined,
  100: undefined
}

const dotStyleH = {
  backgroundColor: 'black',
  border: '2px white solid',
  width: '12px',
  height: '12px',
  bottom: '-4px',
  marginleft: '-6px'
}
const dotStyleV = {
  backgroundColor: 'black',
  border: '2px white solid',
  width: '12px',
  height: '12px',
  left: '0',
  marginTop: '-6px'
}

export function Customizer() {
  const breakpoint = useBreakpoint()
  const downLg = useDown('betweenld')
  const [{ selectedElementId }, { updateModifiers }] = useCanvasContext()
  const [{ stepId, gradientCustomizer }, { updateGradientCustomizer }] =
    useStepsContext()
  const [{ [stepId]: StepSelection }, { update, getColor }] =
    useOptionsContext()

  const activeSelectionIndex = Object.values(StepSelection)
    .map(element => element?.id)
    .indexOf(selectedElementId)

  const activeColor = getColor({
    stepId: stepId,
    index:
      activeSelectionIndex !== -1 || !activeSelectionIndex
        ? activeSelectionIndex
        : null
  })

  const [selection, setSelection] = useState([])
  const [settings, setSettings] = useState(gradientDefault)

  useEffect(() => {
    if (activeColor) {
      setSelection(activeColor.selection)
      setSettings(activeColor.settings)
    }
  }, [activeColor, activeSelectionIndex])

  const { activeIndex } = gradientCustomizer
  const [handleActive, setHandleActive] = useState(activeIndex)

  const incrementAngle = angle => {
    const current = angle
    updateModifiers({ canSetColor: true })
    update({
      [stepId]: {
        ...StepSelection[activeSelectionIndex],
        color: {
          ...activeColor,
          settings: {
            colorStops: settings.colorStops,
            angle: current < 360 ? current + 45 : 45
          }
        }
      }
    })
  }

  const handleColorsStop = values => {
    updateModifiers({ canSetColor: true })

    update({
      [stepId]: {
        ...StepSelection[activeSelectionIndex],
        color: {
          ...activeColor,
          settings: {
            colorStops: [0, values[1], 100], // prevent handle 1 and 3 from being dragged
            angle: settings.angle
          }
        }
      }
    })
  }

  const handleClick = index => {
    setHandleActive(index)
    updateGradientCustomizer({
      action: 'activeIndex',
      value: `${index}`
    })
  }

  const customHandle = handleProperties => {
    if (!selection) return

    return (
      <Handle
        {...handleProperties}
        key={handleProperties.index}
        style={{
          border: 'white 2px solid',
          backgroundColor: selection[handleProperties.index]
            ? selection[handleProperties.index]
            : 'black',
          width: '30px',
          height: '30px',

          marginTop: downLg ? '0' : '-12px',
          marginLeft: downLg ? '-12px' : '0',
          boxShadow:
            handleActive === handleProperties.index
              ? '0 0 0 4px white'
              : 'none',
          zIndex: handleActive === handleProperties.index ? 1 : 0
        }}
        onClick={() => handleClick(handleProperties.index)}
        value
      >
        {!selection[handleProperties.index] && (
          <x.div
            color="white"
            w="100%"
            h="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Plus width="14px" height="14px" />
          </x.div>
        )}
      </Handle>
    )
  }

  return (
    <>
      <x.div
        w={{
          _: 'auto',
          betweenld: `${CanvasDimensions[breakpoint].w * 0.75}px`
        }}
        h={{
          _: `${CanvasDimensions[breakpoint].h * 0.75}px`,
          betweenld: 'auto'
        }}
        mx="auto"
        display="flex"
        alignItems="center"
        position="relative"
        justifyContent={{ _: 'flex-end', betweenld: 'center' }}
      >
        <SolidButton
          h="auto"
          position="absolute"
          left={{ _: '100%', betweenld: '-25px' }}
          top={{ _: '-25px', betweenld: '50%' }}
          display="flex"
          borderRadius="5.4px"
          transform
          translateX={{ _: '-50%', betweenld: '-100%' }}
          translateY={{ _: '-100%', betweenld: '-50%' }}
          px="7px"
          py="9px"
          onClick={() => incrementAngle(settings?.angle)}
        >
          <Icon icon="degrees" width="15px" fill="black" mr="5px"></Icon>
          <span>45°</span>
        </SolidButton>

        <Range
          dotStyle={downLg ? dotStyleV : dotStyleH}
          defaultValue={settings.colorStops}
          value={[0, settings.colorStops[1], 100]} // prevent handle 1 and 3 from being dragged
          count={2}
          allowCross={false}
          marks={marks}
          trackStyle={[
            { backgroundColor: 'transparent' },
            { backgroundColor: 'transparent' },
            { backgroundColor: 'transparent' }
          ]}
          railStyle={{
            backgroundColor: 'transparent',
            backgroundImage: `url(${
              downLg ? dashedBackgroundV.src : dashedBackground.src
            })`,
            backgroundSize: downLg ? '3px 10px' : '10px 3px',
            backgroundPosition: 'center center',
            backgroundRepeat: downLg ? 'repeat-y' : 'repeat-x'
          }}
          vertical={downLg}
          handle={handleProperties => customHandle(handleProperties)}
          onChange={event => handleColorsStop(event)}
        />
      </x.div>
    </>
  )
}
