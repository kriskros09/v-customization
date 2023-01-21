import { steps } from './reducer'

const getNextStepKey = ({ stepId, stepsOrderedKeys }) => {
  const currentIndex = stepsOrderedKeys.indexOf(stepId)
  const nextStep = stepsOrderedKeys[currentIndex + 1]

  if (nextStep) {
    return nextStep
  }
  return stepId
}

const getPreviousStep = ({ stepId, stepsOrderedKeys }) => {
  const currentIndex = stepsOrderedKeys.indexOf(stepId)
  const previousStep = stepsOrderedKeys[currentIndex - 1]

  if (previousStep) {
    return previousStep
  }

  return stepId
}

const canGoNext = ({ stepKey, order }) =>
  order.indexOf(stepKey) < order.length - 1

const canGoPrevious = ({ stepKey, order }) => order.indexOf(stepKey) > 0

function stepsActions({ state, dispatch }) {
  return {
    prev: () => {
      const previousStepKey = getPreviousStep(state)
      const { stepsOrderedKeys } = state
      const payload = {
        index: stepsOrderedKeys.indexOf(previousStepKey),
        stepId: previousStepKey,
        currentStep: steps[previousStepKey],
        canGoNext: canGoNext({
          stepKey: previousStepKey,
          order: stepsOrderedKeys
        }),
        canGoPrevious: canGoPrevious({
          stepKey: previousStepKey,
          order: stepsOrderedKeys
        }),
        gradientCustomizer: {
          isVisible: false,
          activeIndex: 0
        }
      }

      return dispatch({
        type: 'steps:prev',
        payload
      })
    },
    next: () => {
      const nextStepKey = getNextStepKey(state)
      const { stepsOrderedKeys } = state
      const payload = {
        index: stepsOrderedKeys.indexOf(nextStepKey),
        stepId: nextStepKey,
        currentStep: steps[nextStepKey],
        canGoNext: canGoNext({ stepKey: nextStepKey, order: stepsOrderedKeys }),
        canGoPrevious: canGoPrevious({
          stepKey: nextStepKey,
          order: stepsOrderedKeys
        }),
        gradientCustomizer: {
          isVisible: false,
          activeIndex: 0
        }
      }
      return dispatch({
        type: 'steps:next',
        payload
      })
    },
    getStepById: stepId => steps[stepId],
    updateStepsOrderedKeys: payload => {
      const { stepsOrderedKeys } = state
      const { update, current } = payload

      if (update != current) {
        const index = stepsOrderedKeys.indexOf(current)
        stepsOrderedKeys[index] = update

        return dispatch({
          type: 'steps:update:stepsOrderedKeys',
          stepsOrderedKeys
        })
      }
    },
    updateStepLabel: payload => {
      const { label } = payload

      return dispatch({
        type: 'steps:update:updateStepLabel',
        label
      })
    },
    updateGradientCustomizer: payload => {
      switch (payload.action) {
        case 'toggle':
          return dispatch({
            type: 'steps:toggle:gradientCustomizer',
            payload: payload.value
          })
        case 'activeIndex':
          return dispatch({
            type: 'steps:update:gradientCustomizer:activeIndex',
            payload: payload.value
          })
        default:
          return
      }
    },
    reset: () => dispatch({ type: 'steps:reset' })
  }
}

export { stepsActions }
