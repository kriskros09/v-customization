import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Move({ width, height, fill, ...properties }) {
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
        d="M11.5317 11.0096L10.0221 9.5L11.5317 7.99036L12.4676 8.92619L12.9995 6L10.0733 6.53189L11.0096 7.46827L9.5 8.97791L7.99036 7.46827L8.92619 6.53243L6 6.00054L6.53189 8.92674L7.46827 7.99036L8.97791 9.5L7.46827 11.0096L6.53243 10.0738L6.00054 13L8.92674 12.4681L7.99036 11.5317L9.5 10.0221L11.0096 11.5317L10.0738 12.4676L13 12.9995L12.4681 10.0733L11.5317 11.0096Z"
        fill="white"
        stroke="white"
        strokeWidth="0.2"
        strokeMiterlimit="10"
      />
      <circle cx="9.5" cy="9.5" r="9" stroke="white" />
    </x.svg>
  )
}

Move.propTypes = {
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
