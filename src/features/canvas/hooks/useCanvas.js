import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'
import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'

import { useUIContext } from '@/context/index'
import { useErrorContext } from '@/context/index'
import { useCustomizationContext } from '@/features/customization/context'
import { toolbarSteps } from '@/features/toolbar/constants'
import { useOptionsContext } from '@/features/toolbar/context'

import { useCanvasContext } from '../context'
import {
  addElement,
  addText,
  blackListValidator,
  clipCanvas,
  generateCanvasImage,
  getCanvasDataLessJson,
  handlePathCreated,
  handleResponsiveView,
  isObjectsOverlapping,
  loadCanvasImages,
  loadJsonOnCanvas,
  removeElement,
  saveCustomizationToGallery,
  setBackgroundColor,
  setCanvasDrawingMode,
  setCanvasImageBackground,
  setClipOnCanvas,
  setElementColor,
  setObjectMatrixRelationship,
  setPathColor,
  swapFontFamily
} from '../editor'

const BlackListModal = dynamic(() =>
  import('@/common/components/Modal/Content').then(
    module => module.BlackListValidatorModal
  )
)

// object overlapping error message
const DynamicError = dynamic(() =>
  import('@/common/components/Errors/Content').then(
    module => module.ObjectOverlap
  )
)

// eslint-disable-next-line sonarjs/cognitive-complexity
function useCanvasEditor({ canvas }) {
  const [epodImages, setEpodImages] = useState(null)
  const [saveCanvasHistory, setSaveCanvasHistory] = useState(false)
  const [saveOptionsHistory, setSaveOptionsHistory] = useState(false)
  const [
    { mode, shouldReset, download, save },
    { resetCustomization, initDownload, saveCustomization }
  ] = useCustomizationContext()
  const [
    {
      selectedElementId,
      elementIdToDelete,
      currentState,
      initialState,
      savedDimension,
      modifiers: modifiers,
      history: { undoStack }
    },
    {
      updateCanvasState,
      setSelectedElementId,
      setElementIdToDelete,
      updateModifiers
    }
  ] = useCanvasContext()

  const {
    canAddElements,
    canRestoreHistory,
    canFreedraw,
    canSetColor,
    orientationMode,
    resize
  } = modifiers

  const [
    {
      color: { color },
      pattern: { selection: pattern, color: patternColor },
      freehand: freehand
    },
    optionsActions
  ] = useOptionsContext()

  const [{ preview }, dispatch] = useUIContext()
  const [
    {
      hasError: { error }
    },
    dispatchError
  ] = useErrorContext()

  //get active symbol color ?
  const freehandActiveIndex = Object.values(freehand)
    .map(element => element.id)
    .indexOf(selectedElementId) // Index of Active element

  const freehandActiveColor = freehand[freehandActiveIndex]?.color

  const freehandActiveFont =
    freehand[freehandActiveIndex]?.type === 'text'
      ? freehand[freehandActiveIndex]?.selection
      : null

  const selectionCreated = useCallback(
    _event => {
      // eslint-disable-next-line no-console
      console.log('created', _event.selected)
      if (!selectedElementId && _event.selected[0].id) {
        setSelectedElementId(_event.selected[0].id)
      }

      if (
        selectedElementId &&
        _event.selected[0].id !== selectedElementId &&
        _event.selected[0].id
      ) {
        setSelectedElementId(_event.selected[0].id)
      }
    },
    [selectedElementId, setSelectedElementId]
  )

  const selectionUpdated = useCallback(
    // eslint-disable-next-line sonarjs/no-identical-functions
    _event => {
      // eslint-disable-next-line no-console
      // console.log('updated', _event.selected)
      canvas.off('selection:updated')
      if (!selectedElementId && _event.selected[0].id) {
        setSelectedElementId(_event.selected[0].id)
        // eslint-disable-next-line sonarjs/no-duplicate-string
      }

      if (
        selectedElementId &&
        _event.selected[0].id !== selectedElementId &&
        _event.selected[0].id
      ) {
        setSelectedElementId(_event.selected[0].id)
      }
    },
    [selectedElementId, setSelectedElementId, canvas]
  )

  const selectionCleared = useCallback(
    _event => {
      // eslint-disable-next-line no-console
      console.log('cleared', _event)
      if (
        _event.target ||
        (_event.deselected && _event.deselected[0]?.name !== 'pattern')
      ) {
        setSelectedElementId(null)
        canvas.off('selection:cleared')
      }
    },
    [setSelectedElementId, canvas]
  )

  const objectRemoved = useCallback(
    // eslint-disable-next-line no-unused-vars
    _event => {
      // eslint-disable-next-line no-console
      console.log('removed', _event)
      canvas.off('object:removed')
    },
    [canvas]
  )

  const objectModified = useCallback(
    _event => {
      // eslint-disable-next-line no-console
      console.log('modified', _event)

      if (!saveCanvasHistory) {
        setSaveCanvasHistory(true)
      }

      if (
        !saveOptionsHistory &&
        (_event.action === 'drag' ||
          _event.action === 'rotate' ||
          _event.action === 'scale')
      ) {
        setSaveOptionsHistory(true)
      }
    },
    [
      setSaveCanvasHistory,
      saveCanvasHistory,
      setSaveOptionsHistory,
      saveOptionsHistory
    ]
  )

  const textOnChange = useCallback(
    _event => {
      if (_event?.target.canvas && _event?.target.canvas.contextContainer) {
        const foundProfanity = blackListValidator(
          _event?.target.canvas,
          selectedElementId
        )
        if (foundProfanity) {
          dispatch({
            type: 'modal:open',
            payload: { type: 'default', content: <BlackListModal /> }
          })
        }
      }
    },
    [dispatch, selectedElementId]
  )

  const selectionTransformed = useCallback(
    _event => {
      setObjectMatrixRelationship(canvas, _event.target)
      if (
        (_event?.target.canvas &&
          _event?.target.canvas.contextContainer &&
          _event?.target.name === 'symbols') ||
        _event?.target.name === 'text' ||
        _event?.target.name === 'draw'
      ) {
        const { isOverlaping } = isObjectsOverlapping({
          canvas,
          target: _event.target
        })
        dispatchError({
          type: 'obj:overlaping',
          payload: {
            error: isOverlaping,
            content: isOverlaping ? <DynamicError /> : null
          }
        })
      }
    },
    [canvas, dispatchError]
  )

  const drawCreated = useCallback(
    _event => {
      if (_event.path && canFreedraw) {
        // Set props to fabric object
        const pathCreated = handlePathCreated({ canvas, object: _event.path })
        canvas.off('path:created')
        if (pathCreated) {
          //Add newly created object to freehand options list
          const selection = {
            id: pathCreated.id,
            selection: canFreedraw.selection,
            type: pathCreated.name,
            color: canFreedraw.color
          }

          optionsActions.update({
            [toolbarSteps.FREEHAND]: selection
          })
          updateModifiers({ canFreedraw: false })
        }
      }
    },
    [canvas, canFreedraw, updateModifiers, optionsActions]
  )

  // Save Canvas history each time canvas is modified
  useEffect(() => {
    if (saveCanvasHistory) {
      const newCanvasState = getCanvasDataLessJson({ canvas })
      //Check if context has already been updated by comparing current json of objects and the ones in canvas context
      if (
        JSON.stringify(currentState.objects) !==
          JSON.stringify(newCanvasState.objects) &&
        !undoStack[0]?.hasError
      ) {
        // eslint-disable-next-line no-console
        console.log(
          '%c ADD HISTORY TO CANVAS',
          'background: #222; color: #bada55'
        )

        updateCanvasState({
          history: { undoStack: [{ ...currentState, hasError: error }] },
          currentState: newCanvasState
        })
      }
      setSaveCanvasHistory(false)
    }
  }, [
    saveCanvasHistory,
    setSaveCanvasHistory,
    currentState,
    canvas,
    updateCanvasState,
    error,
    undoStack
  ])

  // Save Options history each time canvas is modified
  useEffect(() => {
    if (saveOptionsHistory) {
      // eslint-disable-next-line no-console
      console.log(
        '%c ADD HISTORY TO OPTIONS',
        'background: #222; color: #FF0000'
      )
      optionsActions.updateHistory()
      setSaveOptionsHistory(false)
    }
  }, [saveOptionsHistory, setSaveOptionsHistory, canvas, optionsActions])

  //Load existing customization (initialState) on canvas. This will be used when user wants to continue to customizaed a saved work
  useEffect(() => {
    if (canvas && canvas?.contextContainer && initialState) {
      const { hasLoaded, shouldResize } = loadJsonOnCanvas({
        canvas,
        json: initialState
      })

      if (hasLoaded && shouldResize && !resize) {
        updateModifiers({ resize: true })
      }

      //Check orientation in order to make change before loading
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialState, canvas])

  //Load epod images from url and from string
  useEffect(() => {
    if (canvas && canvas?.contextContainer && !epodImages && orientationMode) {
      setEpodImages(loadCanvasImages())
    }
  }, [epodImages, canvas, orientationMode])

  // Initialize canvas
  useEffect(() => {
    if (
      mode &&
      canvas &&
      canvas?.contextContainer &&
      !shouldReset &&
      !canRestoreHistory &&
      orientationMode &&
      epodImages &&
      !initialState
    ) {
      setCanvasImageBackground({
        canvas,
        mode,
        orientationMode,
        color,
        epodImages
      })

      !canAddElements &&
        updateModifiers({
          canAddElements: true
        })
    }
  }, [
    mode,
    canvas,
    updateCanvasState,
    shouldReset,
    color,
    updateModifiers,
    orientationMode,
    canAddElements,
    canRestoreHistory,
    epodImages,
    initialState
  ])

  //Save canvas json one time on init
  useEffect(() => {
    if (
      canvas &&
      canvas?.contextContainer &&
      !shouldReset &&
      Object.keys(currentState).length === 0
    ) {
      updateCanvasState({
        currentState: getCanvasDataLessJson({ canvas })
      })
    }
  }, [canvas, currentState, shouldReset, updateCanvasState])

  //Clip canvas on preview
  useEffect(() => {
    if (canvas && canvas?.contextContainer) {
      setClipOnCanvas({ canvas, orientationMode })
      if (preview) {
        const activeElement = canvas.getActiveObjects()
        clipCanvas({ canvas, mode, orientationMode })

        if (activeElement && activeElement[0]?.name !== 'pattern') {
          canvas.discardActiveObject().renderAll()
        }
      } else {
        canvas.clipPath = null
        canvas.renderAll()
      }
    }
  }, [canvas, preview, mode, orientationMode])

  //Canvas has been resize or orientation has change
  useEffect(() => {
    if (canvas && canvas?.contextContainer && resize) {
      handleResponsiveView({ canvas, orientationMode })

      updateModifiers({ resize: false, canAddElements: true })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas, savedDimension, orientationMode, resize])

  // Reset Canvas
  useEffect(() => {
    if (shouldReset) {
      canvas.clear()
      resetCustomization()
      setEpodImages(null)
      updateCanvasState({
        history: { undoStack: [] },
        currentState: getCanvasDataLessJson({ canvas })
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReset, canvas])

  // Bind events
  useEffect(() => {
    const bindEvents = canvas => {
      canvas.on('selection:created', selectionCreated)
      canvas.on('selection:updated', selectionUpdated)
      canvas.on('selection:cleared', selectionCleared)
      canvas.on('text:changed', debounce(textOnChange, 500))
      canvas.on('object:moved', selectionTransformed)
      canvas.on('object:scaled', selectionTransformed)
      canvas.on('object:rotated', selectionTransformed)
      canvas.on('object:removed', objectRemoved)
      canvas.on('object:modified', throttle(objectModified, 1000))
      canvas.on('path:created', drawCreated)
    }
    if (canvas && canvas?.contextContainer) {
      bindEvents(canvas)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    canvas,
    updateCanvasState,
    selectedElementId,
    freehand,
    pattern,
    canFreedraw
  ])

  // Set base color (background of vape)
  useEffect(() => {
    if (canvas && canvas.contextContainer && !canRestoreHistory) {
      setBackgroundColor({ canvas, color: color, type: color.type })
    }
  }, [color, canvas, orientationMode, mode, canRestoreHistory, canAddElements])

  // Add pattern element
  useEffect(() => {
    if (
      canvas &&
      canvas.contextContainer &&
      pattern &&
      canAddElements &&
      !canRestoreHistory
    ) {
      const element = { type: 'pattern', elementId: pattern }

      if (selectedElementId) {
        if (selectedElementId !== pattern) {
          removeElement({ canvas }, selectedElementId)
          addElement({ canvas, element, orientationMode })
        }
      } else {
        addElement({ canvas, element, orientationMode })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pattern, canvas, orientationMode, mode, canRestoreHistory])

  // Set Pattern Color
  useEffect(() => {
    if (
      canvas &&
      canvas.contextContainer &&
      patternColor.selection.length > 0 &&
      selectedElementId &&
      !canRestoreHistory
    ) {
      setElementColor({
        canvas,
        selection: selectedElementId,
        color: patternColor,
        type: patternColor.type
      })
    }
  }, [selectedElementId, patternColor, canvas, canRestoreHistory])

  // Add freehand element
  useEffect(() => {
    if (
      canvas &&
      canvas.contextContainer &&
      freehand &&
      canAddElements &&
      !canRestoreHistory
    ) {
      const freehandItem = freehand.slice(-1)[0]

      if (freehandItem && !canvas.getItemByAttr('id', freehandItem.id)) {
        const element = {
          selection: freehandItem.selection,
          type: freehandItem.type,
          elementId: freehandItem.id
        }

        if (element?.type === 'symbols') {
          addElement({ canvas, element, orientationMode }, updateCanvasState)
          updateModifiers({ canSetColor: true })
        } else if (element?.type === 'text') {
          addText({ canvas, element, orientationMode })
          updateModifiers({ canSetColor: true })
        }
      }
    }
  }, [
    freehand,
    canvas,
    orientationMode,
    updateCanvasState,
    canAddElements,
    canRestoreHistory,
    updateModifiers
  ])

  //Freedraw
  useEffect(() => {
    if (
      canvas &&
      canvas.contextContainer &&
      canAddElements &&
      !canRestoreHistory &&
      canFreedraw !== null &&
      typeof canFreedraw !== 'undefined'
    ) {
      setCanvasDrawingMode({ canvas, canFreedraw })
    }
  }, [canvas, canAddElements, canRestoreHistory, canFreedraw])

  // Set freehand element Color
  useEffect(() => {
    if (
      canvas &&
      canvas.contextContainer &&
      freehandActiveColor &&
      freehandActiveColor.selection.length > 0 &&
      selectedElementId &&
      !canRestoreHistory &&
      canSetColor
    ) {
      if (canvas.getItemByAttr('id', selectedElementId)?.name !== 'draw') {
        setElementColor({
          canvas,
          selection: selectedElementId,
          color: freehandActiveColor,
          type: freehandActiveColor.type
        })
        updateModifiers({ canSetColor: false })
      } else {
        setPathColor({
          canvas,
          selection: selectedElementId,
          color: freehandActiveColor,
          type: freehandActiveColor.type
        })
        updateModifiers({ canSetColor: false })
      }
    }
  }, [
    selectedElementId,
    freehandActiveColor,
    canvas,
    canRestoreHistory,
    canSetColor,
    updateModifiers
  ])

  // Set freehand swap font
  useEffect(() => {
    if (
      canvas &&
      canvas.contextContainer &&
      freehandActiveFont &&
      selectedElementId &&
      !canRestoreHistory
    ) {
      swapFontFamily(canvas, selectedElementId, freehandActiveFont)
    }
  }, [selectedElementId, freehandActiveFont, canvas, canRestoreHistory])

  //Delete an object
  useEffect(() => {
    if (
      canvas &&
      canvas.contextContainer &&
      elementIdToDelete &&
      !canAddElements &&
      !canRestoreHistory
    ) {
      removeElement({ canvas }, elementIdToDelete)

      setElementIdToDelete(null)

      updateModifiers({
        canAddElements: true
      })
    }
  }, [
    elementIdToDelete,
    canvas,
    setElementIdToDelete,
    updateModifiers,
    canAddElements,
    canRestoreHistory
  ])

  //restore Canvas History on undo
  useEffect(() => {
    if (
      canvas &&
      canvas.contextContainer &&
      !canAddElements &&
      canRestoreHistory
    ) {
      const loadedFromJson = loadJsonOnCanvas({ canvas, json: undoStack[0] })

      if (loadedFromJson) {
        updateCanvasState({
          history: {
            undoStack: []
          },
          currentState: getCanvasDataLessJson({ canvas })
        })

        dispatchError({
          type: 'obj:overlaping',
          payload: {
            error: false,
            content: null
          }
        })
      }

      updateModifiers({
        canAddElements: true,
        canRestoreHistory: false
      })
    }
  }, [
    canvas,
    updateModifiers,
    canAddElements,
    canRestoreHistory,
    undoStack,
    updateCanvasState,
    dispatchError
  ])

  // Dowload canvas img
  useEffect(() => {
    if (canvas && canvas.contextContainer && download) {
      generateCanvasImage(canvas, initDownload)
    }
  }, [canvas, download, initDownload])

  // Save customization
  useEffect(() => {
    if (canvas && canvas.contextContainer && save) {
      const canvasState = {
        ...getCanvasDataLessJson({
          canvas
        }),
        canvasWidth: canvas.getWidth(),
        canvasHeight: canvas.getHeight()
      }

      // eslint-disable-next-line no-console
      console.log('SAVE', canvasState)

      saveCustomizationToGallery(canvas, saveCustomization)
      //saveCustomization() //toggle save to false
    }
  }, [canvas, save, saveCustomization])

  return {
    setBackgroundColor
  }
}

export { useCanvasEditor }
