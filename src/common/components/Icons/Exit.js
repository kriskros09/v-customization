import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Exit({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      viewBox="0 0 17 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <circle cx="8.85254" cy="7.99994" r="7.5" stroke="white" />
      <rect
        x="6.72607"
        y="6.03015"
        width="0.428571"
        height="6"
        transform="rotate(-45 6.72607 6.03015)"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
      <rect
        x="7.0293"
        y="10.2728"
        width="0.428571"
        height="6"
        transform="rotate(-135 7.0293 10.2728)"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </x.svg>
  )
}

Exit.propTypes = {
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
