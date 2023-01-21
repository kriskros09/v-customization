import { useTh, x } from '@xstyled/styled-components'
import { useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import { Fill, Icon, InvertedButton, Pattern } from '@/common/components'
import { gradientDefault, toolbarSteps } from '@/features/toolbar/constants'
import { useOptionsContext, useStepsContext } from '@/features/toolbar/context'
import { getColorSelection, getToggleOptions } from '@/features/toolbar/utils'

import { ColorButton } from '../ColorButton'
import { Slider } from '../Slider'

const customizationModes = {
  DESIGN: 'design',
  COLOUR: 'colour'
}
const customizationModeLabels = {
  [customizationModes.DESIGN]: 'Pick your pattern',
  [customizationModes.COLOUR]: 'Pick your pattern colour'
}

export function Patterns() {
  const gradientBorder = useTh('BorderGradient.vuse-gradient')
  const [
    { gradientCustomizer, stepId },
    { getStepById, updateStepLabel, updateGradientCustomizer }
  ] = useStepsContext()
  const [
    {
      [toolbarSteps.PATTERN]: {
        selection: patternSelection
        // color: { selection: colorSelection, settings: colorSettings }
      }
    },
    customizationActions
  ] = useOptionsContext()
  const patternStep = getStepById(toolbarSteps.PATTERN)

  const { colour } = patternStep.options
  const [colorOptions, setColoroptions] = useState(colour)
  const designs = patternStep.options[customizationModes.DESIGN]
  const [activeDesignTab, setActiveDesigntab] = useState(
    patternStep.tabs[customizationModes.DESIGN]?.[0]?.label
  )
  const [activeColorTab, setActiveColortab] = useState(
    patternStep.tabs[customizationModes.COLOUR]?.[0]?.label
  )

  const [activeMode, setActiveMode] = useState(customizationModes.DESIGN)

  const {
    selection: colorSelection,
    settings: colorSettings,
    type: colorType
  } = customizationActions.getColor({
    stepId: stepId
  })

  const handleTabChange = (tab, mode) => {
    mode === 'design' && setActiveDesigntab(tab.label)
    mode === 'colour' && setActiveColortab(tab.label)

    customizationActions.update({
      [toolbarSteps.PATTERN]: {
        selection: patternSelection,
        color: {
          selection: colorSelection,
          type: colorType,
          settings: colorSettings == null ? gradientDefault : colorSettings
        }
      }
    })

    if (tab.label === 'gradient' && mode === 'colour') {
      updateGradientCustomizer({ action: 'toggle', value: true })
    } else {
      updateGradientCustomizer({ action: 'toggle', value: false })
    }
  }

  const handleModeChange = mode => {
    updateStepLabel({
      label: customizationModeLabels[mode]
    })
    setActiveMode(mode)

    if (activeColorTab === 'gradient' && mode === 'colour') {
      updateGradientCustomizer({ action: 'toggle', value: true })
    } else {
      updateGradientCustomizer({ action: 'toggle', value: false })
    }
  }

  const handleDesignClick = design => {
    customizationActions.update({
      [toolbarSteps.PATTERN]: {
        selection: design,
        id: design,
        color: {
          selection: colorSelection,
          type: colorType,
          settings: colorSettings == null ? gradientDefault : colorSettings
        }
      }
    })
  }

  const handleColorClick = color => {
    const selection = getColorSelection(
      activeColorTab,
      color,
      gradientCustomizer.activeIndex,
      colorSelection
    )
    customizationActions.update({
      [toolbarSteps.PATTERN]: {
        selection: patternSelection,
        color: {
          selection: selection,
          type: activeColorTab,
          settings: colorSettings
        }
      }
    })
  }

  const addSlides = (option, index, type) => {
    const newColorOptionsArray = getToggleOptions(
      colorOptions,
      option,
      index,
      type
    )
    setColoroptions(newColorOptionsArray)
  }

  return (
    <x.div
      display="flex"
      flexDirection="column"
      px={{ _: 5, md: '30' }}
      pr={{ _: 0, md: '30' }}
      justifyContent="flex-start"
      h="full"
      w="full"
    >
      <x.div
        display="flex"
        justifyContent="center"
        mt={{ _: '10px', md: '17px' }}
        mb={{ _: 0, md: '17px' }}
      >
        {patternStep.tabs[activeMode].length > 0 &&
          patternStep.tabs[activeMode].map((tab, index) => (
            <InvertedButton
              key={index}
              onClick={() => handleTabChange(tab, activeMode)}
              fontSize={{ _: '0.5rem', md: '0.75rem' }}
              opacity={{
                _: [activeDesignTab, activeColorTab].includes(tab.label)
                  ? 1
                  : 0.25,
                hover: 1
              }}
              borderBottomWidth={'2px'}
              borderStyle="solid"
              background={
                [activeDesignTab, activeColorTab].includes(tab.label)
                  ? gradientBorder
                  : 'unset'
              }
              borderColor="transparent"
              px={0}
              pb={0.5}
              mx={{ _: 4, md: 5 }}
            >
              {tab.label}
            </InvertedButton>
          ))}
      </x.div>
      <x.div row h="full" w="100%" position="relative" mb="0">
        {/* <x.div
          position="absolute"
          left={{ _: '-20px', md: 0 }}
          background="linear-gradient(90deg, #141414 38.93%, rgba(20, 20, 20, 0) 85%)"
          w={{ _: '25%', md: 1 / 3, lg: '20%' }}
          h="100%"
          zIndex={1}
          display={{ xl: 'none' }}
        /> */}

        <x.div
          col={{ _: 1 / 15, md: 2 / 15, lg: 1 / 15 }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          zIndex={2}
          mb={{ _: 0, md: '14px', lg: '17px' }}
        >
          {Object.values(customizationModes).map((mode, index) => {
            return (
              <InvertedButton
                key={mode}
                onClick={() => handleModeChange(mode)}
                opacity={{ _: activeMode === mode ? 1 : 0.25, hover: 1 }}
                px={0}
                pb={0.5}
                mx={0}
                mt={{ _: index != 0 ? 4 : 0, md: index != 0 ? 5 : 0 }}
                flexDirection={{ _: 'column', md: 'row' }}
                fontSize={{ _: '0.375rem', md: '0.625rem' }}
              >
                <Icon
                  icon={mode}
                  width={{ _: '15px', md: '22px' }}
                  mr={{ _: 0, md: '15' }}
                  mb={{ _: 1.5, md: 0 }}
                  fill={activeMode === mode ? 'none' : 'white'}
                  flexShrink={0}
                />
                {mode}
              </InvertedButton>
            )
          })}
        </x.div>

        <x.div
          col={{ _: 14 / 15, md: 13 / 15, lg: 14 / 15 }}
          display="flex"
          zIndex={0}
        >
          <x.div
            display={activeMode === customizationModes.DESIGN ? 'flex' : 'none'}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
            px={{ _: 5, md: '60px' }}
            pr={{ _: 0, md: 5, lg: '60px' }}
            h="100%"
            w="100%"
          >
            {designs &&
              designs.map(opt => (
                <Slider
                  display={activeDesignTab === opt.type ? 'block' : 'none'}
                  key={opt.type}
                  slidesPerView={3}
                  spaceBetween={60}
                  breakpoints={{
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 40
                    },
                    992: {
                      slidesPerView: 6
                    },
                    1024: {
                      slidesPerView: 7,
                      spaceBetween: 60
                    },
                    1280: {
                      slidesPerView: 9,
                      spaceBetween: 60
                    }
                  }}
                >
                  {Object.values(opt.options).map(pattern => (
                    <SwiperSlide key={pattern}>
                      <Pattern
                        pattern={pattern}
                        isActive={patternSelection === pattern}
                        onClick={() => handleDesignClick(pattern)}
                      />
                    </SwiperSlide>
                  ))}
                </Slider>
              ))}
          </x.div>
          <x.div
            display={activeMode === customizationModes.COLOUR ? 'flex' : 'none'}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            px={{ _: 5, md: '60px' }}
            w="100%"
          >
            {colorOptions &&
              colorOptions.map(opt => (
                <Slider
                  display={activeColorTab === opt.type ? 'block' : 'none'}
                  key={opt.type}
                  breakpoints={{
                    640: {
                      slidesPerView: 6
                    },
                    992: {
                      slidesPerView: 8
                    },
                    1024: {
                      slidesPerView: 9,
                      spaceBetween: 40
                    },
                    1280: {
                      slidesPerView: 11,
                      spaceBetween: 40
                    }
                  }}
                >
                  {opt.type === 'fill'
                    ? Object.values(opt.options).map(fill => (
                        <SwiperSlide key={fill}>
                          <Fill
                            fill={fill}
                            isActive={colorSelection[0] === fill}
                            onClick={() => handleColorClick(fill)}
                          />
                        </SwiperSlide>
                      ))
                    : Object.values(opt.options).map((option, index) => (
                        <SwiperSlide key={option.hex}>
                          <ColorButton
                            color={option.hex}
                            isActive={
                              activeColorTab === 'gradient'
                                ? colorSelection.includes(option.hex)
                                : colorSelection[0] === option.hex
                            }
                            onClick={() => {
                              if (option.subcolors?.length > 0) {
                                addSlides(option, index, opt.type)
                              }
                              handleColorClick(option)
                            }}
                          />
                        </SwiperSlide>
                      ))}
                </Slider>
              ))}
          </x.div>
        </x.div>
      </x.div>
    </x.div>
  )
}
