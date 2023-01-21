import { fabric } from 'fabric'
import { renderToString } from 'react-dom/server'

import { customizationModes } from '@/features/customization/context'

import { EpodDesignSVG, EpodRenderSVG } from '../components/EpodSVG'
import { setBackgroundColor } from '../editor'

const designSvgString = renderToString(<EpodDesignSVG />)
const renderSvgString = renderToString(<EpodRenderSVG />)

const backgrounds = {
  [customizationModes.RENDER]: {
    img: '/img/customization/vape-epod2.png',
    overlay: renderSvgString
  },
  [customizationModes.DESIGN]: designSvgString
}

function setImageOrientation(canvas, canvasObject, orientationMode) {
  if (orientationMode === 'portrait') {
    if (canvasObject.angle === -90) {
      //already on portrait
      canvasObject.scaleToHeight(canvas.getHeight())
    } else {
      // landscape to portrait
      canvasObject.rotate(-90)
      canvasObject.scaleToWidth(canvas.getHeight())
    }
  } else {
    if (canvasObject.angle === 0) {
      //already on landscape
      canvasObject.scaleToWidth(canvas.getWidth())
    } else {
      //portrait to landscape
      canvasObject.rotate(0)
      canvasObject.scaleToHeight(canvas.getWidth())
    }
  }

  return canvasObject
}

function loadCanvasImages() {
  let images = { RenderPng: null, RenderSvg: null, DesignSvg: null }

  // RENDER svg Overlay
  fabric.loadSVGFromString(
    backgrounds[customizationModes.RENDER].overlay,
    function (objects, options) {
      const loadedSVG = fabric.util.groupSVGElements(objects, options)
      loadedSVG.set({
        id: 'epod-overlay-svg',
        name: 'epod-base-svg',
        globalCompositeOperation: 'hard-light',
        evented: false,
        selectable: false,
        centeredRotation: true,
        centeredScaling: true,
        originX: 'center',
        originY: 'center',
        preserveObjectStacking: true
      })

      images.RenderSvg = loadedSVG
    }
  )

  // RENDER png image
  fabric.Image.fromURL(
    backgrounds[customizationModes.RENDER].img,
    function (img) {
      img.set({
        id: 'epod-png',
        name: 'epod-png',
        evented: false,
        selectable: false,
        centeredRotation: true,
        centeredScaling: true,
        originX: 'center',
        originY: 'center',
        src: img.toDataURL()
      })
      images.RenderPng = img
    }
  )

  //DESIGN svg

  fabric.loadSVGFromString(
    backgrounds[customizationModes.DESIGN],
    function (objects, options) {
      const loadedSVG = fabric.util.groupSVGElements(objects, options)
      loadedSVG.set({
        id: 'epod-svg',
        name: 'epod-base-svg',
        evented: false,
        selectable: false,
        centeredRotation: true,
        centeredScaling: true,
        originX: 'center',
        originY: 'center'
      })

      images.DesignSvg = loadedSVG
    }
  )

  return images
}

function setCanvasImageBackground({
  canvas,
  mode,
  orientationMode,
  color,
  epodImages
}) {
  const backgroundSVG = canvas.getItemByAttr('id', 'epod-svg')
  const backgroundPNG = canvas.getItemByAttr('id', 'epod-png')
  const backgroundOverlay = canvas.getItemByAttr('id', 'epod-overlay-svg')

  const { RenderPng, RenderSvg, DesignSvg } = epodImages

  if (mode === customizationModes.RENDER && !backgroundPNG) {
    if (backgroundSVG) {
      canvas.remove(backgroundSVG)
    }

    const backgroundImagePng = setImageOrientation(
      canvas,
      RenderPng,
      orientationMode
    )
    const backgroundImageSvg = setImageOrientation(
      canvas,
      RenderSvg,
      orientationMode
    )

    canvas.add(backgroundImagePng, backgroundImageSvg)
    RenderPng.center()
    canvas.moveTo(backgroundImagePng, 1)

    RenderSvg.center()
    canvas.moveTo(backgroundImageSvg, 2)

    if (canvas && canvas.contextContainer && color.selection.length > 0) {
      setBackgroundColor({ canvas, color: color, type: color.type })
    }
  }

  if (mode === customizationModes.DESIGN && !backgroundSVG) {
    if (backgroundPNG) {
      canvas.remove(backgroundPNG)
      canvas.remove(backgroundOverlay)
    }

    const backgroundImage = setImageOrientation(
      canvas,
      DesignSvg,
      orientationMode
    )

    canvas.add(backgroundImage)
    DesignSvg.center()
    canvas.moveTo(backgroundImage, 1)

    if (canvas && canvas.contextContaine && color.selection.length > 0) {
      setBackgroundColor({ canvas, color: color, type: color.type })
    }
  }

  canvas.renderAll()
}

export { loadCanvasImages, setCanvasImageBackground }
