import { x } from '@xstyled/styled-components'
import { useEffect } from 'react'

import { Icon, SolidButton } from '@/common/components'
import { useOptionsContext, useStepsContext } from '@/features/toolbar/context'

import { useCanvasContext } from '../context'

function CanvasCallToActions(properties) {
  const [
    {
      selectedElementId,
      elementIdToDelete,
      history: { undoStack },
      modifiers: modifiers
    },
    { setElementIdToDelete, updateModifiers }
  ] = useCanvasContext()

  const { canRestoreHistory } = modifiers

  const [{ history }, optionsActions] = useOptionsContext()
  const [{ stepId }] = useStepsContext()
  function handleDeleteClick() {
    if (!selectedElementId) return
    updateModifiers({
      canAddElements: false
    })

    setElementIdToDelete(selectedElementId)
  }

  function handleUndoClick() {
    if (undoStack.length === 0 || Object.keys(history).length === 0) return
    updateModifiers({
      canRestoreHistory: true,
      canAddElements: false
    })
  }

  useEffect(() => {
    if (elementIdToDelete) {
      optionsActions.delete(elementIdToDelete)
    }
  }, [elementIdToDelete, optionsActions])

  useEffect(() => {
    if (canRestoreHistory) {
      optionsActions.restoreHistory()
    }
  }, [optionsActions, canRestoreHistory])
  return (
    <x.div
      display="flex"
      flexDirection={{ _: 'column', betweenld: 'row' }}
      justifyContent="center"
      margin="0 auto"
      position={{ _: 'absolute', betweenld: 'relative' }}
      bottom={{ _: '0', betweenld: 'unset' }}
      right={{ _: '-23vw', betweenld: 'unset' }}
      transform
      translateY={{ _: '0', md: 'unset' }}
      visibility={stepId === 'device' ? 'hidden' : 'visible'}
      {...properties}
    >
      <SolidButton
        borderRadius={{ _: 'lg lg 0 0', betweenld: 'lg 0 0 0' }}
        borderWidth={{ _: '0 0 1 0', betweenld: '0 1 0 0' }}
        fontSize={{ _: 8 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        py={3}
        px={2.5}
        disabled={undoStack.length === 0 || Object.keys(history).length === 0}
        opacity={{ _: '1', disabled: '0.75' }}
        onClick={() => handleUndoClick()}
      >
        <Icon
          icon="undo"
          width={'10px'}
          fill="vuse-black"
          transform
          rotate={'90deg'}
        />
        <x.span pt={1.5}>Undo</x.span>
      </SolidButton>
      <SolidButton
        borderRadius={{ _: '0 0 lg lg', betweenld: '0 lg 0 0' }}
        borderWidth={{ _: '1 0 0 0', betweenld: '0 0 0 1' }}
        fontSize={{ _: 8 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        py={3}
        px={2.5}
        disabled={!selectedElementId}
        opacity={{ _: '1', disabled: '0.75' }}
        onClick={() => handleDeleteClick()}
      >
        <Icon icon="trash" width={'10px'} />
        <x.span pt={1.5}>Trash</x.span>
      </SolidButton>
    </x.div>
  )
}

export { CanvasCallToActions }
