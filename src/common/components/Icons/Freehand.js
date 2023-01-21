import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Freehand({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      fill={fill}
      viewBox="0 0 37 42"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M27.2821 32.8288L14.79 11.1986L22.9351 6.50317L35.4185 28.1334L35.4097 37.5068L27.2821 32.8288Z"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M27.2822 32.8287L35.4186 28.1333"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M15.1078 2.34761C16.1863 1.72496 17.4679 1.55623 18.6708 1.87854C19.8737 2.20084 20.8992 2.98779 21.5219 4.06625L22.9244 6.49549L14.7917 11.1909L13.3892 8.76165C12.7666 7.68319 12.5978 6.40155 12.9201 5.19869C13.2424 3.99582 14.0294 2.97026 15.1078 2.34761Z"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M7.96035 25.5899H15.0862C15.5926 25.5887 16.0942 25.6875 16.5624 25.8804C17.0305 26.0734 17.456 26.3569 17.8145 26.7145C18.173 27.0722 18.4574 27.497 18.6514 27.9648C18.8454 28.4325 18.9453 28.9339 18.9453 29.4403V29.4403C18.9453 29.9466 18.8454 30.448 18.6514 30.9158C18.4574 31.3835 18.173 31.8083 17.8145 32.166C17.456 32.5236 17.0305 32.8071 16.5624 33.0001C16.0942 33.1931 15.5926 33.2918 15.0862 33.2907H4.85912C3.83562 33.2907 2.85403 33.6972 2.13031 34.421C1.40658 35.1447 1 36.1263 1 37.1498C0.999999 37.6562 1.09988 38.1576 1.29393 38.6253C1.48797 39.093 1.77237 39.5179 2.13083 39.8755C2.4893 40.2332 2.91479 40.5166 3.38295 40.7096C3.85111 40.9026 4.35274 41.0013 4.85912 41.0002H35.4359"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </x.svg>
  )
}

Freehand.propTypes = {
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
