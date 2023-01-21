import PropTypes from 'prop-types'
import { useMemo } from 'react'

import {
  AllAges,
  Arrow,
  Bookmark,
  Carret,
  Cart,
  Delete,
  Design,
  Download,
  Edit,
  Epod2,
  Epod2Plus,
  Exit,
  Freehand,
  Help,
  Info,
  Move,
  Paint,
  Pattern,
  Resize,
  Rotate,
  RotateDegrees,
  Trash,
  Undo
} from '../Icons'

const IconMap = {
  download: Download,
  bookmark: Bookmark,
  exit: Exit,
  info: Info,
  undo: Undo,
  carret: Carret,
  epod2: Epod2,
  epod2plus: Epod2Plus,
  pattern: Pattern,
  freehand: Freehand,
  paint: Paint,
  colour: Paint,
  allages: AllAges,
  help: Help,
  design: Design,
  cart: Cart,
  edit: Edit,
  delete: Delete,
  resize: Resize,
  move: Move,
  rotate: Rotate,
  degrees: RotateDegrees,
  trash: Trash,
  arrow: Arrow
}

export default function Icon({
  width = 16,
  height = 'auto',
  fill = 'none',
  icon,
  ...properties
}) {
  const IconComponent = useMemo(
    () => Object.entries(IconMap).find(([key]) => key === icon)[1],
    [icon]
  )

  if (!IconComponent) return null

  return (
    <IconComponent width={width} height={height} fill={fill} {...properties} />
  )
}

Icon.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  viewBox: PropTypes.string,
  fill: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  icon: PropTypes.oneOf(Object.keys(IconMap)).isRequired
}
