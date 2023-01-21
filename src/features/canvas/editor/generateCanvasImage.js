import { clipCanvas } from './canvas-utils'

function generateCanvasImage(canvas, generateImageCallback) {
  const options = [
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
    'relationship',
    'angle',
    'width',
    'height'
  ]
  canvas.clone(clonedCanvas => {
    if (clonedCanvas) {
      if (!clonedCanvas.clipPath) {
        clipCanvas({ canvas: clonedCanvas })
      }
      const image = clonedCanvas.toDataURL({
        format: 'jpeg',
        enableRetinaScaling: true,
        multiplier: 0,
        quality: 0.7
      })

      const link = document.createElement('a')
      link.download = 'my-customization.png'
      link.href = image
      link.click()
    }
  }, options)

  generateImageCallback()
}

export { generateCanvasImage }
