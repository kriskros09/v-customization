import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function RotateDegrees({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      viewBox="0 0 18 17"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M9.34955 15.9999C10.8329 15.9999 12.2829 15.56 13.5163 14.7359C14.7497 13.9118 15.7109 12.7405 16.2786 11.37C16.8462 9.99961 16.9948 8.49162 16.7054 7.03677C16.416 5.58193 15.7017 4.24557 14.6528 3.19669C13.6039 2.1478 12.2676 1.4335 10.8127 1.14411C9.35787 0.854727 7.84988 1.00325 6.47945 1.5709C5.10901 2.13855 3.93768 3.09984 3.11358 4.3332C2.28947 5.56656 1.84961 7.01659 1.84961 8.49994"
        stroke="#141414"
        strokeWidth="1.20339"
        strokeMiterlimit="10"
        fill="transparent"
      />
      <path d="M3.69997 7.8501L1.84999 10.4601L0 7.8501H3.69997Z" fill={fill} />
    </x.svg>
  )
}

RotateDegrees.propTypes = {
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
