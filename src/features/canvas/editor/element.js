import { fabric } from 'fabric'
import { renderToString } from 'react-dom/server'

import { patternMap } from '@/common/components/Patterns/Pattern'
import { symbolMap } from '@/common/components/Symbols/Symbol'

import { setObjectMatrixRelationship } from './canvas-utils'

function createClipShape(element, loadedSVG, controls) {
  const ClipShape = new fabric.Rect({
    id: element.elementId,
    name: element.type,
    evented: controls.evented,
    selectable: controls.selectable,
    width: loadedSVG.getScaledWidth(),
    height: loadedSVG.getScaledHeight(),
    top: 0,
    left: 0,
    hasBorders: controls.hasBorders,
    hasControls: controls.hasControls,
    centeredRotation: true,
    centeredScaling: true,
    originX: 'center',
    originY: 'center'
  })

  ClipShape.clipPath = loadedSVG
  ClipShape.set({
    fill: '#ffffff',
    minScaleLimit: 0.09
  })

  return ClipShape
}

function addElement({ canvas, element, orientation }) {
  // adds an element
  if (element?.type === 'pattern' && patternMap[element.elementId]) {
    const PatternComponent = patternMap[element.elementId]
    const pattern = renderToString(<PatternComponent />)
    fabric.loadSVGFromString(pattern, function (objects, options) {
      const loadedSVG = fabric.util.groupSVGElements(objects, options)
      loadedSVG.set({
        top: -loadedSVG.height / 2,
        left: -loadedSVG.width / 2,
        statefullCache: true,
        width: loadedSVG.width,
        height: loadedSVG.height
      })

      const controls = {
        evented: false,
        selectable: false,
        hasBorders: false,
        hasControls: false
      }

      //Create a clip shape in order to apply color / gradient / fill
      const patternObject = createClipShape(element, loadedSVG, controls)

      // Set object rotation
      if (orientation === 'portrait') {
        patternObject.scaleToWidth(canvas.getHeight())
        patternObject.set({
          angle: -90
        })
      } else {
        patternObject.scaleToWidth(canvas.getWidth())
      }
      canvas.add(patternObject)
      canvas.setActiveObject(patternObject)
      canvas.centerObject(patternObject, canvas.renderAll.bind(canvas))
      setObjectMatrixRelationship(canvas, patternObject)

      canvas.bringToFront(patternObject)
    })
  }

  if (element?.type === 'symbols' && symbolMap[element.selection]) {
    const SymbolComponent = symbolMap[element.selection]
    const symbol = renderToString(<SymbolComponent />)
    fabric.loadSVGFromString(symbol, function (objects, options) {
      const loadedSVG = fabric.util.groupSVGElements(objects, options)

      loadedSVG.scaleToWidth(300) //Scale wider to avoid blurry svg on object resize

      loadedSVG.set({
        top: -loadedSVG.getScaledHeight() / 2, // position because object will be clipped
        left: -loadedSVG.getScaledWidth() / 2, // position because object will be clipped
        fill: '#ffffff'
      })
      const controls = {
        evented: true,
        selectable: true,
        hasBorders: true,
        hasControls: true
      }

      const symbolObject = createClipShape(element, loadedSVG, controls)
      symbolObject.scaleToWidth(40)
      symbolObject.set({
        //position object top left corner
        top: symbolObject.getScaledHeight() / 2,
        left: symbolObject.getScaledWidth() / 2
      })

      canvas.add(symbolObject)
      setObjectMatrixRelationship(canvas, symbolObject)
      canvas.setActiveObject(symbolObject)
    })
  }
  canvas.fire('object:modified', { action: 'add new element' })
}

// TODO: move this fnction elsewhere
function removeElement({ canvas }, elementId) {
  // removes an element
  const elementToremove = canvas.getItemByAttr('id', elementId)

  if (elementToremove) {
    canvas.remove(elementToremove)
    canvas.renderAll()
  }
}

export { addElement, removeElement }
