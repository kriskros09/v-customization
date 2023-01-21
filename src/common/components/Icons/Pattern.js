import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Pattern({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      fill={fill}
      viewBox="0 0 40 41"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path d="M10.0003 0H0V10.0003H10.0003V0Z" fill="white" />
      <path d="M30.0008 0H20.0005V10.0003H30.0008V0Z" fill="white" />
      <path d="M10.0003 20.0007H0V30.0011H10.0003V20.0007Z" fill="white" />
      <path
        d="M19.9994 10.0005H9.99902V20.0008H19.9994V10.0005Z"
        fill="white"
      />
      <path d="M19.9994 30.001H9.99902V40.0013H19.9994V30.001Z" fill="white" />
      <path
        d="M30.0008 20.0007H20.0005V30.0011H30.0008V20.0007Z"
        fill="white"
      />
      <path
        d="M39.9998 10.0005H29.9995V20.0008H39.9998V10.0005Z"
        fill="white"
      />
      <path d="M39.9998 30.001H29.9995V40.0013H39.9998V30.001Z" fill="white" />
    </x.svg>
  )
}

Pattern.propTypes = {
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
