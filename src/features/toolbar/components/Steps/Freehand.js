import { useTh, x } from '@xstyled/styled-components'
import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'

import {
  Brush,
  Fill,
  Icon,
  InvertedButton,
  Symbol,
  Text
} from '@/common/components'
import { useCanvasContext } from '@/features/canvas/context'
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
  [customizationModes.DESIGN]: 'Pick your design',
  [customizationModes.COLOUR]: 'Pick your design colour'
}

export function Freehand() {
  const gradientBorder = useTh('BorderGradient.vuse-gradient')
  const [{ selectedElementId, modifiers }, { updateModifiers }] =
    useCanvasContext()

  const { canFreedraw } = modifiers

  const [
    { gradientCustomizer },
    { getStepById, updateStepLabel, updateGradientCustomizer }
  ] = useStepsContext()
  const [{ [toolbarSteps.FREEHAND]: freehandSelection }, customizationActions] =
    useOptionsContext()
  const freehandStep = getStepById(toolbarSteps.FREEHAND)

  const { colour } = freehandStep.options
  const [colorOptions, setColoroptions] = useState(colour)
  const designs = freehandStep.options[customizationModes.DESIGN]
  const [activeDesignTab, setActiveDesigntab] = useState(
    freehandStep.tabs[customizationModes.DESIGN]?.[0]?.label
  )
  const [activeColorTab, setActiveColortab] = useState(
    freehandStep.tabs[customizationModes.COLOUR]?.[0]?.label
  )
  const [activeMode, setActiveMode] = useState(customizationModes.DESIGN)

  const activeSelectionIndex = Object.values(freehandSelection)
    .map(element => element.id)
    .indexOf(selectedElementId) // Index of Active element

  const activeColor = freehandSelection[activeSelectionIndex]?.color
  const [colorSelection, setColorSelection] = useState([])
  const [colorType, setColorType] = useState(activeColorTab)
  const [colorSettings, setColorSettings] = useState(gradientDefault)

  useEffect(() => {
    if (activeColor) {
      setColorSelection(activeColor.selection)
      setColorSettings(activeColor.settings)
      setColorType(activeColor.type)
    }
  }, [activeColor])

  const handleTabChange = (tab, mode) => {
    mode === 'design' && setActiveDesigntab(tab.label)
    mode === 'colour' && setActiveColortab(tab.label)

    // customizationActions.update({
    //   [toolbarSteps.FREEHAND]: {
    //     ...freehandSelection[activeSelectionIndex],
    //     color: {
    //       selection: colorSelection,
    //       type: colorType,
    //       settings: colorSettings
    //     }
    //   }
    // })

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

  const handleTextClick = (type, fontFamily) => {
    canFreedraw && updateModifiers({ canFreedraw: false }) //disable freedraw if active

    const selection = {
      id: uuidv4(),
      selection: fontFamily,
      type,
      color: {
        selection: colorSelection,
        type: colorType,
        settings: colorSettings
      }
    }
    if (
      activeSelectionIndex !== -1 &&
      freehandSelection[activeSelectionIndex].type === 'text'
    ) {
      customizationActions.update({
        [toolbarSteps.FREEHAND]: {
          ...freehandSelection[activeSelectionIndex],
          selection: fontFamily
        }
      })
    } else {
      customizationActions.update({
        [toolbarSteps.FREEHAND]: selection
      })
    }
  }

  const handleDesignClick = (type, design) => {
    canFreedraw && updateModifiers({ canFreedraw: false }) //disable freedraw if active

    const selection = {
      id: uuidv4(),
      selection: design,
      type,
      color: {
        selection: [],
        type: 'solid',
        settings: gradientDefault
      }
    }

    customizationActions.update({
      [toolbarSteps.FREEHAND]: selection
    })
  }

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleFreedrawClick = (type, brush) => {
    //if freedraw not active
    if (!canFreedraw) {
      updateModifiers({
        canFreedraw: {
          type: type,
          selection: brush,
          color: {
            selection: colorSelection,
            type: colorType,
            settings: colorSettings
          }
        }
      })
    } else {
      //if bruch clicked already active
      if (canFreedraw.selection === brush) {
        updateModifiers({ canFreedraw: false })

        //change brush
      } else {
        updateModifiers({
          canFreedraw: {
            type: type,
            selection: brush,
            color: {
              selection: colorSelection,
              type: colorType,
              settings: colorSettings
            }
          }
        })
      }
    }
  }

  const handleColorClick = color => {
    if (activeSelectionIndex !== -1) {
      updateModifiers({ canSetColor: true })
      const selection = getColorSelection(
        activeColorTab,
        color,
        gradientCustomizer.activeIndex,
        activeColor.selection
      )

      customizationActions.update({
        [toolbarSteps.FREEHAND]: {
          ...freehandSelection[activeSelectionIndex],
          color: {
            selection: selection,
            type: activeColorTab,
            settings: colorSettings
          }
        }
      })
    }
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
        {freehandStep.tabs[activeMode].length > 0 &&
          freehandStep.tabs[activeMode].map((tab, index) => (
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
      <x.div row h="full" w="100%" position="relative">
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
                  {Object.values(opt.options).map(value => (
                    <SwiperSlide key={value}>
                      {opt.type === 'symbols' && (
                        <Symbol
                          symbol={value}
                          isActive={
                            freehandSelection[activeSelectionIndex]
                              ?.selection === value
                          }
                          onClick={() => handleDesignClick(opt.type, value)}
                        />
                      )}
                      {opt.type === 'text' && (
                        <Text
                          font={value}
                          isActive={
                            freehandSelection[activeSelectionIndex]
                              ?.selection === value
                          }
                          onClick={() => handleTextClick(opt.type, value)}
                        />
                      )}
                      {opt.type === 'draw' && (
                        <Brush
                          brush={value}
                          isActive={canFreedraw?.selection === value}
                          onClick={() => handleFreedrawClick(opt.type, value)}
                        />
                      )}
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
                            isActive={colorSelection?.[0] === fill}
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
                                : colorSelection?.[0] === option.hex
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
