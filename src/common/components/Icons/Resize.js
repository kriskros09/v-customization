import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Resize({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      viewBox="0 0 19 19"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M7.17382 10.7253L11.5995 13L12 7.69618L10.1135 8.88009L8.05263 5L7 5.66067L9.0609 9.54075L7.17382 10.7253Z"
        fill="white"
        stroke="white"
        strokeWidth="0.2"
        strokeMiterlimit="10"
      />
      <circle cx="9.5" cy="9.5" r="9" stroke="white" />
    </x.svg>
  )
}

Resize.propTypes = {
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
