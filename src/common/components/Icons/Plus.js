import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Plus({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      fill={fill}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <line y1="7" x2="14" y2="7" stroke="white" strokeWidth="2" />
      <line
        x1="7"
        y1="14"
        x2="7"
        y2="4.37114e-08"
        stroke="white"
        strokeWidth="2"
      />
    </x.svg>
  )
}

Plus.propTypes = {
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
  fill: PropTypes.string
}
