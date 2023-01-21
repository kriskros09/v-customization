import { fabric } from 'fabric'

import { blacklistedWords } from '../utils'
import { setObjectMatrixRelationship } from './canvas-utils'

function blackListValidator(canvas, selectedElementId) {
  const currentSelection = canvas.getItemByAttr('id', selectedElementId)
  const currentValue = currentSelection?.text
  const string = currentValue?.toLowerCase().split(/\b(\s)/)
  const hasProfanity = string?.some(badWord => blacklistedWords.has(badWord))

  if (hasProfanity) {
    currentSelection.set('text', 'abc')
    canvas.discardActiveObject()
    canvas.requestRenderAll()
  }

  return hasProfanity
}

function swapFontFamily(canvas, selectedElementId, fontFamily) {
  const currentSeletion = canvas.getItemByAttr('id', selectedElementId)

  if (currentSeletion.fontFamily !== fontFamily) {
    currentSeletion.set({
      fontFamily: fontFamily
    })
  }

  canvas.requestRenderAll()
}

function addText({ canvas, element, orientation }) {
  const Text = new fabric.Textbox('abc', {
    id: element.elementId,
    name: element.type,
    fontFamily: element.selection,
    evented: true,
    selectable: true,
    centeredRotation: true,
    centeredScaling: true,
    originX: 'center',
    originY: 'center',
    fill: '#ffffff'
  })
  Text.setControlsVisibility({
    mt: true,
    mb: true,
    ml: true,
    mr: true,
    bl: true,
    br: true,
    tl: true,
    tr: true,
    mtr: true
  })
  Text.set({
    top: Text.getScaledHeight() / 2,
    left: Text.getScaledWidth() / 2
  })

  if (orientation === 'portrait') {
    Text.set({
      angle: -90
    })
  }

  canvas.add(Text)
  canvas.setActiveObject(Text)
  setObjectMatrixRelationship(canvas, Text)

  canvas.requestRenderAll()

  canvas.fire('object:modified', { action: 'add new text element' })
}

export { addText, blackListValidator, swapFontFamily }
