import { fabric } from 'fabric'
import { renderToString } from 'react-dom/server'

import { EpodClipModel } from '../components/EpodSVG'

const clipModelSvgString = renderToString(<EpodClipModel />)
const multiply = fabric.util.multiplyTransformMatrices
const invert = fabric.util.invertTransform

const epodbase = 'epod-base-svg'

function setObjectError(hasError, object) {
  object.set({
    cornerColor: hasError ? 'red' : 'white',
    cornerStrokeColor: hasError ? 'red' : 'white',
    borderColor: hasError ? 'red' : 'white'
  })
}

function isObjectsOverlapping({ canvas, target }) {
  target.setCoords()
  target.set('opacity', 1)
  let isOverlaping = false
  canvas.forEachObject(function (object) {
    let SYMBOLS = object.name === 'symbols'
    let TEXT = object.name === 'text'
    let DRAW = object.name === 'draw'

    setObjectError(false, object)
    if (object === target) return

    if (SYMBOLS || TEXT || DRAW) {
      const intersectsWithObject = target.intersectsWithObject(object)
      object.set('opacity', intersectsWithObject ? 0.5 : 1)

      if (intersectsWithObject) {
        isOverlaping = intersectsWithObject
      }
    }
  })
  setObjectError(isOverlaping, target)
  return { isOverlaping: isOverlaping }
}

function handleResponsiveView({ canvas, orientationMode }) {
  // Filter canvas's objects to target base objects only
  canvas
    .getObjects()
    .filter(
      o =>
        // eslint-disable-next-line sonarjs/no-duplicate-string
        o.name === epodbase || o.name === 'epod-png' || o.name === 'clip-model'
    )
    .map(object => {
      if (orientationMode === 'portrait') {
        if (object.angle === -90) {
          //already on portrait
          object.scaleToHeight(canvas.getHeight())
        } else {
          // landscape to portrait
          object.rotate(-90)
          object.scaleToWidth(canvas.getHeight())
        }
      } else {
        if (object.angle === 0) {
          //already on landscape
          object.scaleToWidth(canvas.getWidth())
        } else {
          //portrait to landscape
          object.rotate(0)
          object.scaleToHeight(canvas.getWidth())
        }
      }
      object.center()
    })

  //get 'base' transform matrix
  const base = canvas.getItemByAttr('name', epodbase)
  const baseTransform = base.calcTransformMatrix()

  canvas
    .getObjects()
    .filter(o => o.name !== epodbase && o.name !== 'epod-png')
    .map(object => {
      if (!object.relationship) {
        return
      }

      const relationship = object.relationship

      const newTransform = multiply(baseTransform, relationship)
      const opt = fabric.util.qrDecompose(newTransform)
      object.set({
        flipX: false,
        flipY: false
      })

      object.name === 'draw' &&
        object.set({ originX: 'center', originY: 'center' })
      object.set
      object.setPositionByOrigin(
        { x: opt.translateX, y: opt.translateY },
        'center',
        'center'
      )
      object.set(opt)
      object.setCoords()
    })
  canvas.requestRenderAll()
}

// Set object relationship to base element
// Each time the base element will be transform (translate, scaled, ...) object will translate relatively
function setObjectMatrixRelationship(canvas, object) {
  if (object) {
    const base = canvas.getItemByAttr('name', epodbase)
    const baseTransform = base.calcTransformMatrix()
    const invertedBaseTransform = invert(baseTransform)

    const desiredTransform = multiply(
      invertedBaseTransform,
      object.calcTransformMatrix()
    )

    if (
      JSON.stringify(object.relationship) !== JSON.stringify(desiredTransform)
    ) {
      object.relationship = desiredTransform
    }
  }
}

// Simple load json on canvas (used to undo last action, to load existing customization)
function loadJsonOnCanvas({ canvas, json }) {
  console.log(json)
  const {
    canvasWidth,
    // eslint-disable-next-line no-unused-vars
    canvasHeight,
    // eslint-disable-next-line no-unused-vars
    hasError,
    ...jsonData
  } = json

  const shouldResize = canvas.getWidth() !== canvasWidth

  let hasloaded = false

  canvas.loadFromJSON(jsonData, canvas.renderAll.bind(canvas), function () {
    hasloaded = true
  })

  return { hasLoaded: hasloaded, shouldResize: shouldResize }
}

function getCanvasDataLessJson({ canvas }) {
  return canvas.toDatalessJSON([
    'id',
    'name',
    'evented',
    'selectable',
    'globalCompositeOperation',
    'fill',
    'centeredRotation',
    'centeredScaling',
    'originX',
    'originY',
    'source',
    'src',
    'repeat',
    'offsetX',
    'offsetY',
    'objects',
    'prototype',
    'canvasWidth',
    'canvasHeight',
    'relationship',
    'angle',
    'cornerColor',
    'cornerStrokeColor',
    'borderColor',
    'index'
  ])
}

function clipCanvas({ canvas }) {
  const clipModel = canvas.getItemByAttr('id', 'clip-model')

  if (clipModel) {
    canvas.clipPath = clipModel

    canvas.renderAll()
  }
}

function setClipOnCanvas({ canvas, orientationMode }) {
  const clipModel = canvas.getItemByAttr('id', 'clip-model')
  if (!clipModel) {
    fabric.loadSVGFromString(clipModelSvgString, function (objects, options) {
      const loadedSVG = fabric.util.groupSVGElements(objects, options)
      loadedSVG.set({
        id: 'clip-model',
        name: 'clip-model',
        evented: false,
        selectable: false,
        centeredRotation: true,
        centeredScaling: true,
        originX: 'center',
        originY: 'center',
        fill: '#141414'
      })

      if (orientationMode === 'portrait') {
        loadedSVG.scaleToWidth(canvas.getHeight())
        loadedSVG.set({
          angle: -90
        })
      } else {
        loadedSVG.scaleToWidth(canvas.getWidth())
      }
      canvas.add(loadedSVG)
      loadedSVG.center()
      loadedSVG.setCoords()
      canvas.moveTo(loadedSVG, 0)
    })
  }
}

export {
  clipCanvas,
  getCanvasDataLessJson,
  handleResponsiveView,
  isObjectsOverlapping,
  loadJsonOnCanvas,
  setClipOnCanvas,
  setObjectMatrixRelationship
}
