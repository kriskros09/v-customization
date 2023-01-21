import { useBreakpoint, x } from '@xstyled/styled-components'
import { fabric } from 'fabric'
import { useEffect, useMemo, useRef, useState } from 'react'

import { Icon, InvertedButton } from '@/common/components'
import { ErrorMessage } from '@/common/components/Errors'
import { useUIContext } from '@/context/index'
import { useCustomizationActions } from '@/features/customization/context'
import { useOptionsContext, useStepsContext } from '@/features/toolbar/context'

import { CanvasCallToActions } from '../components'
import { useCanvasContext } from '../context'
import { useCanvasEditor } from '../hooks/useCanvas'
import { CanvasDimensions, traverseObjects } from '../utils'

//FONT LOADING

fabric.Canvas.prototype.getItemsByAttr = function (attribute, value) {
  var objectList = []
  traverseObjects(this.getObjects(), attribute, value, objectList)
  return objectList
}

fabric.Canvas.prototype.getItemByAttr = function (attribute, value) {
  var objectList = []
  traverseObjects(this.getObjects(), attribute, value, objectList)
  return objectList[0]
}

fabric.Object.NUM_FRACTION_DIGITS = 17

// Custom selectable canvas bounding box
fabric.Object.prototype.cornerColor = 'white'
fabric.Object.prototype.cornerStrokeColor = 'white'
fabric.Object.prototype.cornerStyle = 'circle'
fabric.Object.prototype.borderColor = 'white'
fabric.Object.prototype.borderDashArray = [2, 2]
fabric.Object.prototype.transparentCorners = false

fabric.Object.prototype.setControlsVisibility({
  mt: false,
  mb: false,
  ml: false,
  mr: false,
  bl: true,
  br: true,
  tl: true,
  tr: true,
  mtr: true
})

function Canvas() {
  const [{ preview }] = useUIContext()
  const [, { reset }] = useOptionsContext()
  const [, stepsActions] = useStepsContext()
  const { resetCustomization } = useCustomizationActions()
  const [canvas, setCanvas] = useState(null)
  const canvasElement = useRef(null)
  const canvasElementContainer = useRef(null)
  const breakpoint = useBreakpoint()
  const [initSize] = useState(CanvasDimensions[breakpoint])
  useMemo(() => CanvasDimensions, [])
  useCanvasEditor({ canvas })

  const [{ modifiers: modifiers }, { updateModifiers }] = useCanvasContext()

  // Canvas element initialization
  useEffect(() => {
    if (
      (!canvas || !canvas.contextContainer) &&
      canvasElement &&
      canvasElement.current
    ) {
      const fabricCanvas = new fabric.Canvas(canvasElement.current, {
        width: initSize.w,
        height: initSize.h,
        preserveObjectStacking: true,
        uniformScaling: true,
        canvasOrientation: modifiers.orientation,
        objectCaching: false,
        selection: false
      })

      if (fabricCanvas?.contextContainer) {
        setCanvas(fabricCanvas)
        updateModifiers({
          orientationMode: initSize.w < initSize.h ? 'portrait' : 'landscape'
        })
      }
    }
    if (canvas && canvas.contextContainer && !canvas.canvasOrientation) {
      canvas.canvasOrientation = modifiers.orientation
    }
  }, [initSize, canvas, modifiers.orientation, updateModifiers])

  // Canvas element size initialization
  useEffect(() => {
    if (
      canvas &&
      canvas.contextContainer &&
      canvasElementContainer &&
      canvasElementContainer.current
    ) {
      if (CanvasDimensions[breakpoint].w !== canvas.getWidth()) {
        canvas.setDimensions({
          width: CanvasDimensions[breakpoint].w,
          height: CanvasDimensions[breakpoint].h
        })

        updateModifiers({
          resize: true,
          orientationMode: window.innerWidth <= 1100 ? 'portrait' : 'landscape'
        })
      }

      canvas.requestRenderAll()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoint, canvas, modifiers.orientation])

  return (
    <>
      <x.div
        ref={canvasElementContainer}
        mx="auto"
        w={CanvasDimensions[breakpoint]?.w}
        h={CanvasDimensions[breakpoint]?.h}
        pointerEvents={preview ? 'none' : 'auto'}
        position="relative"
      >
        <CanvasCallToActions display={preview ? 'none' : 'flex'} />

        <InvertedButton
          display={{ _: preview ? 'none' : 'flex', md: 'none' }}
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          position="absolute"
          bottom="0"
          left="-23vw"
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
            mb={{ _: 2.5, md: '15' }}
            fill="white"
          />
          start
          <br />
          over
        </InvertedButton>

        <x.canvas ref={canvasElement} />
      </x.div>
      <ErrorMessage />
    </>
  )
}

export { Canvas }
