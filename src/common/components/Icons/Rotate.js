import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Rotate({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      viewBox="0 0 19 19"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <line x1="9.97656" y1="5" x2="9.97656" y2="13.9535" stroke="white" />
      <line
        x1="14.5928"
        y1="9.33716"
        x2="4.99975"
        y2="9.33716"
        stroke="white"
      />
      <circle cx="9.5" cy="9.5" r="9" stroke="white" />
    </x.svg>
  )
}

Rotate.propTypes = {
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
