import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Carret({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      fill={fill}
      viewBox="0 0 20 10"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.195262 0.183058C0.455612 -0.0610194 0.877722 -0.0610194 1.13807 0.183058L10 8.49112L18.8619 0.183058C19.1223 -0.0610194 19.5444 -0.0610194 19.8047 0.183058C20.0651 0.427136 20.0651 0.822864 19.8047 1.06694L10.4714 9.81694C10.2111 10.061 9.78895 10.061 9.5286 9.81694L0.195262 1.06694C-0.0650874 0.822864 -0.0650874 0.427136 0.195262 0.183058Z"
      />
    </x.svg>
  )
}

Carret.propTypes = {
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
