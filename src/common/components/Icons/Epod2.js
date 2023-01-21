import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Epod2({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      fill={fill}
      viewBox="0 0 218 41"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M216.313 20.4678C216.313 14.2432 213.827 7.36638 213.827 7.36638C213.827 7.36638 213.667 6.29392 212.632 6.29392C211.596 6.29392 201.258 6.61276 189.884 2.75044C189.884 2.75044 186.603 1.43885 186.042 1.19972C185.481 0.960589 184.438 1.00407 183.84 1.00407C183.308 1.00407 4.80629 1.00406 4.80629 1.00406L1.00777 2.73594L1.00776 38.2649L4.80628 39.9968C4.80628 39.9968 183.308 39.9968 183.84 39.9968C184.438 39.9968 185.481 40.033 186.042 39.8012C186.603 39.562 189.884 38.2504 189.884 38.2504C201.258 34.3881 211.589 34.707 212.632 34.707C213.674 34.707 213.835 33.6345 213.835 33.6345C213.835 33.6345 216.313 26.6925 216.313 20.4678Z"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.79785 1L4.79785 40"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M92.1586 21.5289C91.5899 21.5289 91.1233 21.0724 91.1233 20.4999C91.1233 19.9347 91.5826 19.4709 92.1586 19.4709L105.501 19.4709C106.07 19.4709 106.536 19.9275 106.536 20.4999C106.536 21.0651 106.077 21.5289 105.501 21.5289L92.1586 21.5289Z"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M91.1221 20.4988L1 20.4988"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M172.685 20.4988L106.527 20.4988"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M180.091 12.9492L172.683 20.4999"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M180.091 28.0592L172.683 20.5012"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M179.712 20.5009C179.712 11.9212 185.282 11.1024 185.282 4.22559"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M185.282 4.22559C185.282 11.0662 175.497 14.4212 175.497 20.5009"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M179.712 20.5015C179.712 29.0812 185.282 29.9 185.282 36.7768"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M175.498 20.5015C175.498 26.5884 185.282 29.9362 185.282 36.7768L185.282 39.9652"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M185.282 4.22551L185.282 1.03711"
        stroke="white"
        strokeWidth="0.8121"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </x.svg>
  )
}

Epod2.propTypes = {
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
  fill: PropTypes.string
}

Epod2.defaultProps = {
  width: '218',
  height: '41',
  fill: 'none'
}
