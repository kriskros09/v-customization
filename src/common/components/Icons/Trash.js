import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Trash({ width, height, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      viewBox="0 0 12 16"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M10.241 5.90552H1.27539V15.3861H10.241V5.90552Z"
        stroke="#141414"
        strokeWidth="0.780294"
        strokeMiterlimit="10"
      />
      <path
        d="M11.1134 3.19458H0.40625V5.90532H11.1134V3.19458Z"
        stroke="#141414"
        strokeWidth="0.780294"
        strokeMiterlimit="10"
      />
      <path
        d="M7.69233 1.34058H3.8252V3.19455H7.69233V1.34058Z"
        stroke="#141414"
        strokeWidth="0.780294"
        strokeMiterlimit="10"
      />
      <path
        d="M3.8252 8.18091V13.1108"
        stroke="#141414"
        strokeWidth="0.780294"
        strokeMiterlimit="10"
      />
      <path
        d="M5.76367 8.18091V13.1108"
        stroke="#141414"
        strokeWidth="0.780294"
        strokeMiterlimit="10"
      />
      <path
        d="M7.69043 8.18091V13.1108"
        stroke="#141414"
        strokeWidth="0.780294"
        strokeMiterlimit="10"
      />
    </x.svg>
  )
}

Trash.propTypes = {
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
