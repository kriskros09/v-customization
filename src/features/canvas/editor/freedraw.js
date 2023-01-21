import { v4 as uuidv4 } from 'uuid'

import { freeDrawingBrushProperties } from '../utils'
import { setObjectMatrixRelationship } from './canvas-utils'

const setCanvasDrawingMode = ({ canvas, canFreedraw }) => {
  canvas.isDrawingMode = !canFreedraw ? false : true

  if (canFreedraw.type && canFreedraw.selection) {
    const { selection } = canFreedraw
    const BrushProperties = freeDrawingBrushProperties[selection]

    canvas.freeDrawingBrush.width = Number(BrushProperties.width)
    const { color } = canFreedraw

    canvas.freeDrawingBrush.color =
      color.selection.length === 1 ? color.selection[0] : '#ffffff'
  }
}

const handlePathCreated = ({ canvas, object }) => {
  object.set({
    id: uuidv4(),
    name: 'draw',
    centeredRotation: true,
    centeredScaling: true,
    originX: 0,
    originY: 0
  })

  canvas.setActiveObject(object)
  setObjectMatrixRelationship(canvas, object)

  canvas.fire('object:modified', { action: 'add new element path' })

  return object
}

export { handlePathCreated, setCanvasDrawingMode }
