import { useTh, x } from '@xstyled/styled-components'
import { useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import { InvertedButton } from '@/common/components'
import { gradientDefault, toolbarSteps } from '@/features/toolbar/constants'
import { useOptionsContext, useStepsContext } from '@/features/toolbar/context'
import { getColorSelection, getToggleOptions } from '@/features/toolbar/utils'

import { ColorButton } from '../ColorButton'
import { Slider } from '../Slider'

export function Colors() {
  const gradientBorder = useTh('BorderGradient.vuse-gradient')
  const [
    { gradientCustomizer, stepId },
    { getStepById, updateGradientCustomizer }
  ] = useStepsContext()
  const { options, tabs } = getStepById(toolbarSteps.COLOR)
  const [colorOptions, setColoroptions] = useState(options)
  const [, { update, updateWithoutHistory, getColor }] = useOptionsContext()

  const {
    selection: colorSelection,
    settings: colorSettings,
    type: colorType
  } = getColor({
    stepId: stepId
  })

  const [activeTab, setActivetab] = useState(tabs?.[0]?.label)

  const handleTabChange = tab => {
    if (activeTab != tab.label) {
      setActivetab(tab.label)
      updateWithoutHistory({
        [toolbarSteps.COLOR]: {
          color: {
            selection: colorSelection,
            type: colorType,
            settings: colorSettings ? colorSettings : gradientDefault
          }
        }
      })

      if (tab.label === 'gradient') {
        updateGradientCustomizer({ action: 'toggle', value: true })
      } else {
        updateGradientCustomizer({ action: 'toggle', value: false })
      }
    }
  }

  const handleClick = color => {
    const selection = getColorSelection(
      activeTab,
      color,
      gradientCustomizer.activeIndex,
      colorSelection
    )

    update({
      [toolbarSteps.COLOR]: {
        color: {
          selection,
          type: activeTab,
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
      px={{ _: '30', md: '15', xl: '30' }}
      justifyContent="flex-start"
      h="100%"
      w="100%"
    >
      <x.div display="flex" justifyContent="center" mt="17px" mb="27px">
        {tabs.length > 0 &&
          tabs.map((tab, index) => (
            <InvertedButton
              key={index}
              onClick={() => handleTabChange(tab)}
              fontSize={{ _: '0.5rem', md: '0.75rem' }}
              opacity={{ _: activeTab === tab.label ? 1 : 0.25, hover: 1 }}
              borderBottomWidth={'2px'}
              borderStyle="solid"
              background={activeTab === tab.label ? gradientBorder : 'unset'}
              borderColor="transparent"
              px={0}
              pb={0.5}
              mx={{ _: 4, md: 5 }}
            >
              {tab.label}
            </InvertedButton>
          ))}
      </x.div>

      {options.length > 0 &&
        options.map(option => (
          <Slider
            display={activeTab === option.type ? 'block' : 'none'}
            key={option.type}
          >
            {colorOptions &&
              colorOptions
                .filter(opt => opt.type === activeTab)
                .map(optionType =>
                  optionType.options.map((option, index) => (
                    <SwiperSlide key={option.hex}>
                      <ColorButton
                        color={option.hex}
                        isActive={
                          activeTab === 'gradient'
                            ? colorSelection.includes(option.hex)
                            : colorSelection[0] === option.hex
                        }
                        onClick={() => {
                          if (option.subcolors?.length > 0) {
                            addSlides(option, index, optionType.type)
                          }
                          handleClick(option)
                        }}
                      />
                    </SwiperSlide>
                  ))
                )}
          </Slider>
        ))}
    </x.div>
  )
}
