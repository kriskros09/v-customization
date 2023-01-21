/* eslint-disable sonarjs/no-duplicate-string */
import { fabric } from 'fabric'

import { fillMap } from '@/common/components/Fills/Fill'

import { createGradient } from '../utils'

function createFillPattern(offset, padding, Objwidth, img) {
  img.scaleToWidth(Objwidth - offset) // no-repeat

  // create a statuc canvas for img to be able to manipulate it
  const patternSourceCanvas = new fabric.StaticCanvas(null, {
    enableRetinaScaling: false
  })

  patternSourceCanvas.setDimensions({
    width: img.getScaledWidth() + padding,
    height: img.getScaledHeight() + padding
  })
  patternSourceCanvas.add(img)

  patternSourceCanvas.renderAll()

  return new fabric.Pattern({
    // id: color.selection[0],
    source: patternSourceCanvas.getElement(),
    repeat: 'no-repeat',
    offsetX: offset / 2,
    offsetY: offset / 2
  })
}

function setBackgroundColor({ canvas, color, type }) {
  const svgBackground = canvas.getItemByAttr('name', 'epod-base-svg')
  if (svgBackground) {
    const svgPaths = svgBackground._objects

    const background = svgPaths.find(path => path.id === 'background')
    const logo = svgPaths.find(path => path.id === 'logo')

    const uniColor =
      color.selection.length === 0 ? 'rgba(0,0,0,0)' : color.selection[0] //if empty set transparent

    const newColor =
      type === 'solid color' ? uniColor : createGradient(color, background)

    if (background.fill === newColor) return // if color is already applied

    if (background) {
      background.set('fill', newColor)
    }
    if (logo) {
      logo.set('fill', '#ffffff')
    }
    canvas.renderAll()
    // eslint-disable-next-line sonarjs/no-duplicate-string
    canvas.fire('object:modified', { action: 'change base color' })
  }
}

function setElementColor({ canvas, selection, color, type }) {
  const element = canvas.getItemByAttr('id', selection)

  if (element) {
    if (type === 'fill') {
      const Objwidth = element.width

      const padding = 0

      const { src } = fillMap[color.selection[0]]
      fabric.Image.fromURL(src, function (img) {
        const fill = createFillPattern(0, padding, Objwidth, img)

        if (element.fill?.id === color.selection[0]) return // if fill is already applied

        element.set('fill', fill)
        canvas.requestRenderAll()
        canvas.fire('object:modified', { action: 'set element color' })
      })
    } else {
      const newColor =
        type === 'solid color'
          ? color.selection[0]
          : createGradient(color, element)

      if (element.fill === newColor) return // if color is already applied

      element.set('fill', newColor)
      canvas.requestRenderAll()
      canvas.fire('object:modified', { action: 'set element color' })
    }
  }
}

function setPathColor({ canvas, selection, color, type }) {
  const element = canvas.getItemByAttr('id', selection)
  if (type === 'fill') {
    const Objwidth = element.width

    const padding = 0

    const { src } = fillMap[color.selection[0]]
    fabric.Image.fromURL(src, function (img) {
      const fill = createFillPattern(
        -element.strokeWidth,
        padding,
        Objwidth,
        img
      )

      if (element.fill?.id === color.selection[0]) return // if fill is already applied

      element.set('stroke', fill)
      canvas.requestRenderAll()
      canvas.fire('object:modified', { action: 'set path color' })
    })
  } else {
    const newColor =
      type === 'solid color'
        ? color.selection[0]
        : createGradient(color, element)

    if (element.stroke === newColor) return // if color is already applied

    element.set('stroke', newColor)
    canvas.requestRenderAll()
    canvas.fire('object:modified', { action: 'set path color' })
  }
}

export { setBackgroundColor, setElementColor, setPathColor }
