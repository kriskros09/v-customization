import { fabric } from 'fabric'

const getCoordinates = angle => {
  function pointOfAngle(a) {
    return { x: Math.cos(a), y: Math.sin(a) }
  }

  function degreesToRadians(d) {
    return (d * Math.PI) / 180
  }

  const eps = Math.pow(2, -52)
  const calculatedangle = angle % 360
  const startPoint = pointOfAngle(degreesToRadians(180 - calculatedangle))
  const endPoint = pointOfAngle(degreesToRadians(360 - calculatedangle))

  // if you want negative values you can remove the following checks
  // but most likely it will produce undesired results
  if (startPoint.x <= 0 || Math.abs(startPoint.x) <= eps) startPoint.x = 0

  if (startPoint.y <= 0 || Math.abs(startPoint.y) <= eps) startPoint.y = 0

  if (endPoint.x <= 0 || Math.abs(endPoint.x) <= eps) endPoint.x = 0

  if (endPoint.y <= 0 || Math.abs(endPoint.y) <= eps) endPoint.y = 0

  return {
    startPoint: {
      x: Math.round(startPoint.x),
      y: Math.round(startPoint.y)
    },
    endPoint: {
      x: Math.round(endPoint.x),
      y: Math.round(endPoint.y)
    }
  }
}

// eslint-disable-next-line sonarjs/cognitive-complexity
function createGradient(color, object) {
  if (color.settings) {
    const {
      selection,
      settings: { colorStops: colorStops, angle: angle }
    } = color

    const { startPoint, endPoint } = getCoordinates(angle)

    let coords

    if (object.name === 'draw') {
      const objwidth = object.width
      const objheight = object.height
      const objectStrokeWidth = object.strokeWidth / 2
      coords = {
        x1: startPoint.x ? objwidth + objectStrokeWidth : -objectStrokeWidth,
        y1: startPoint.y ? objheight + objectStrokeWidth : -objectStrokeWidth,
        x2: endPoint.x ? objwidth + objectStrokeWidth : -objectStrokeWidth,
        y2: endPoint.y ? objheight + objectStrokeWidth : -objectStrokeWidth
      }
    } else {
      coords = {
        x1: startPoint.x,
        y1: startPoint.y,
        x2: endPoint.x,
        y2: endPoint.y
      }
    }

    return new fabric.Gradient({
      type: 'linear',
      gradientUnits: object.name !== 'draw' ? 'percentage' : 'pixels',
      coords,
      colorStops: [
        { offset: 0, color: '#ffffff' },
        {
          offset: colorStops[0] / 100,
          color: selection[0] ? selection[0] : '#ffffff'
        },
        {
          offset: colorStops[1] / 100,
          color: selection[1] ? selection[1] : '#ffffff'
        },
        {
          offset: colorStops[2] / 100,
          color: selection[2] ? selection[2] : '#ffffff'
        },
        { offset: 1, color: '#ffffff' }
      ]
    })
  }
}

function traverseObjects(objects, attribute, value, objectList) {
  for (let index in objects) {
    if (
      objects[index]['type'] == 'group' &&
      objects[index]['id'] != 'epod-svg' &&
      objects[index]['id'] != 'epod-overlay-svg'
    ) {
      traverseObjects(objects[index].getObjects(), attribute, value, objectList)
    } else if (objects[index][attribute] == value) {
      objectList.push(objects[index])
    }
  }
}

function uid() {
  return Math.random().toString(36).slice(2, 9)
}

const baseWidth = 850
const baseHeight = 300
const ratio = baseWidth / baseHeight

const CanvasDimensions = {
  '2xl': {
    w: baseWidth,
    h: baseHeight
  },
  xl: {
    w: 700,
    h: 700 * (baseHeight / baseWidth)
  },
  betweenld: {
    w: 700,
    h: 700 * (baseHeight / baseWidth)
  },
  lg: {
    w: 760 / ratio,
    h: 760
  },
  md: {
    w: 760 / ratio,
    h: 760
  },
  sm: {
    w: 350 / ratio,
    h: 350
  },
  xs: {
    w: 350 / ratio,
    h: 350
  },
  _: {
    w: 350 / ratio,
    h: 350
  }
}

const blacklistedWords = new Set([
  'anal',
  'anus',
  'arse',
  'ass',
  'ballsack',
  'balls',
  'bastard',
  'bitch',
  'biatch',
  'bloody',
  'blowjob',
  'bollock',
  'bollok',
  'boner',
  'boob',
  'bugger',
  'bum',
  'butt',
  'buttplug',
  'clitoris',
  'cock',
  'coon',
  'crap',
  'cunt',
  'damn',
  'dick',
  'dildo',
  'dyke',
  'fag',
  'feck',
  'fellate',
  'fellatio',
  'felching',
  'fuck',
  'fudgepacker',
  'flange',
  'goddamn',
  'hell',
  'homo',
  'jerk',
  'jizz',
  'juul',
  'knobend',
  'labia',
  'lmao',
  'lmfao',
  'logic',
  'muff',
  'nigger',
  'nigga',
  'omg',
  'penis',
  'piss',
  'poop',
  'prick',
  'pube',
  'pussy',
  'queer',
  'scrotum',
  'sex',
  'shit',
  'sh1t',
  'slut',
  'smegma',
  'spunk',
  'stealth',
  'tit',
  'tosser',
  'turd',
  'twat',
  'vagina',
  'wank',
  'whore',
  'wtf'
])

const freeDrawingBrushProperties = {
  brush1: {
    type: 'default',
    width: 8
  },
  brush2: {
    type: 'default',
    width: 16
  },
  brush3: {
    type: 'default',
    width: 32
  },
  brush4: {
    type: 'default',
    width: 64
  }
}

export {
  blacklistedWords,
  CanvasDimensions,
  createGradient,
  freeDrawingBrushProperties,
  traverseObjects,
  uid
}
