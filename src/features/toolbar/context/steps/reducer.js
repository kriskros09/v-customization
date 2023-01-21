import {
  brushs,
  colors,
  devices,
  fill,
  fullPatterns,
  halfPatterns,
  methods,
  symbols,
  textFonts,
  toolbarSteps
} from '../../constants'

const solidColor = 'solid color'

const options = {
  [toolbarSteps.DEVICE]: [
    {
      type: 'icon',
      label: 'ePod 2',
      iconKey: devices.EPOD2
    },
    {
      type: 'icon',
      label: 'ePod 2+',
      iconKey: devices.EPOD2PLUS
    }
  ],
  [toolbarSteps.METHOD]: [
    {
      type: 'icon',
      label: 'pattern',
      iconKey: methods.PATTERN
    },
    {
      type: 'icon',
      label: 'freehand',
      iconKey: methods.FREEHAND
    }
  ],
  [toolbarSteps.COLOR]: [
    { type: solidColor, options: colors },
    { type: 'gradient', options: colors }
  ],
  [toolbarSteps.PATTERN]: {
    design: [
      { type: 'full pattern', options: fullPatterns },
      { type: 'half pattern', options: halfPatterns }
    ],
    colour: [
      { type: solidColor, options: colors },
      { type: 'gradient', options: colors },
      { type: 'fill', options: fill }
    ]
  },
  [toolbarSteps.FREEHAND]: {
    design: [
      { type: 'symbols', options: symbols },
      { type: 'text', options: textFonts },
      { type: 'draw', options: brushs }
    ],
    colour: [
      { type: solidColor, options: colors },
      { type: 'gradient', options: colors },
      { type: 'fill', options: fill }
    ]
  }
}

const tabs = {
  [toolbarSteps.COLOR]: [
    {
      label: solidColor
    },
    {
      label: 'gradient'
    }
  ],
  [toolbarSteps.PATTERN]: [
    {
      label: 'full pattern'
    },
    {
      label: 'half pattern'
    }
  ],
  [toolbarSteps.FREEHAND]: [
    {
      label: 'symbols'
    },
    {
      label: 'text'
    },
    {
      label: 'draw'
    }
  ]
}

const tabsColor = {
  [toolbarSteps.PATTERN]: [
    {
      label: solidColor
    },
    {
      label: 'gradient'
    },
    {
      label: 'fill'
    }
  ],
  [toolbarSteps.FREEHAND]: [
    {
      label: solidColor
    },
    {
      label: 'gradient'
    },
    {
      label: 'fill'
    }
  ]
}

export const steps = {
  [toolbarSteps.DEVICE]: {
    label: 'pick a device',
    options: options[toolbarSteps.DEVICE]
  },
  [toolbarSteps.METHOD]: {
    label: 'customization method',
    options: options[toolbarSteps.METHOD]
  },
  [toolbarSteps.COLOR]: {
    label: 'base color',
    tabs: tabs[toolbarSteps.COLOR],
    options: options[toolbarSteps.COLOR]
  },
  [toolbarSteps.PATTERN]: {
    label: 'pick your pattern',
    tabs: {
      design: tabs[toolbarSteps.PATTERN],
      colour: tabsColor[toolbarSteps.PATTERN]
    },
    options: options[toolbarSteps.PATTERN]
  },
  [toolbarSteps.FREEHAND]: {
    label: 'pick your design',
    tabs: {
      design: tabs[toolbarSteps.FREEHAND],
      colour: tabsColor[toolbarSteps.FREEHAND]
    },
    options: options[toolbarSteps.FREEHAND]
  }
}

const defaultOrder = [
  toolbarSteps.DEVICE,
  toolbarSteps.METHOD,
  toolbarSteps.COLOR,
  toolbarSteps.PATTERN
]

const initialState = {
  currentStep: steps[defaultOrder[0]],
  stepId: defaultOrder[0],
  index: 0,
  totalSteps: defaultOrder.length,
  canGoNext: true,
  canGoPrevious: false,
  stepsOrderedKeys: defaultOrder,
  gradientCustomizer: {
    isVisible: false,
    activeIndex: 0
  }
}
function stepsReducer(state = initialState, action) {
  switch (action.type) {
    case 'steps:prev':
    case 'steps:next':
      return {
        ...state,
        ...action.payload
      }
    case 'steps:update:stepsOrderedKeys':
      return {
        ...state,
        stepsOrderedKeys: action.stepsOrderedKeys
      }
    case 'steps:update:updateStepLabel':
      return {
        ...state,
        currentStep: {
          ...state.currentStep,
          label: action.label
        }
      }
    case 'steps:toggle:gradientCustomizer':
      return {
        ...state,
        gradientCustomizer: {
          isVisible: action.payload,
          activeIndex: 0
        }
      }
    case 'steps:update:gradientCustomizer:activeIndex':
      return {
        ...state,
        gradientCustomizer: {
          isVisible: true,
          activeIndex: action.payload
        }
      }
    case 'steps:reset':
      return initialState
    default:
      return state
  }
}

export { initialState, stepsReducer }
