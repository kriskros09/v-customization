import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Download({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      viewBox="0 0 17 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M9.17487 10.5769L9.17487 10.7019L9.29987 10.7019L11.2153 10.7019C11.9858 10.7019 12.6172 10.0785 12.6172 9.30633L12.6172 2.27046C12.6172 1.4987 11.9926 0.874916 11.2153 0.874916L2.27677 0.874915C1.50624 0.874915 0.87484 1.4983 0.87484 2.27046L0.874839 9.30633C0.874839 10.0781 1.49945 10.7019 2.27677 10.7019L4.19216 10.7019L4.31716 10.7019L4.31716 10.5769L4.31716 9.61918L4.31716 9.49418L4.19216 9.49418L2.08253 9.49418L2.08254 2.08261L11.4095 2.08261L11.4095 9.49418L9.29987 9.49418L9.17487 9.49418L9.17487 9.61918L9.17487 10.5769Z"
        fill="white"
        stroke="white"
        strokeWidth="0.25"
      />
      <path
        d="M6.1424 13.9289C6.1424 14.2597 6.41544 14.5328 6.74625 14.5328C7.07706 14.5328 7.3501 14.2597 7.3501 13.9289L7.3501 6.58661C7.3501 6.2558 7.07706 5.98276 6.74625 5.98276C6.41544 5.98276 6.1424 6.2558 6.1424 6.58661L6.1424 13.9289Z"
        fill="white"
        stroke="white"
        strokeWidth="0.25"
      />
      <path
        d="M6.31908 14.0959C6.08511 14.3299 6.08511 14.7155 6.31908 14.9495C6.55305 15.1834 6.93866 15.1834 7.17263 14.9495L9.20294 12.9191C9.43691 12.6852 9.43691 12.2996 9.20294 12.0656C8.96897 11.8316 8.58336 11.8316 8.34939 12.0656L6.31908 14.0959Z"
        fill="white"
        stroke="white"
        strokeWidth="0.25"
      />
      <path
        d="M5.14235 12.0656C4.90863 11.8319 4.52359 11.8316 4.28955 12.0649C4.04821 12.299 4.0482 12.6857 4.28951 12.9198L6.31912 14.9495C6.55309 15.1834 6.9387 15.1834 7.17267 14.9495C7.40664 14.7155 7.40664 14.3299 7.17267 14.0959L5.14235 12.0656Z"
        fill="white"
        stroke="white"
        strokeWidth="0.25"
      />
    </x.svg>
  )
}

Download.propTypes = {
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
