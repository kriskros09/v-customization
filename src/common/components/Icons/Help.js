import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Help({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      viewBox="0 0 17 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path d="M8 16C12.4178 16 16 12.4178 16 8C16 3.58222 12.4178 0 8 0C3.58222 0 0 3.58222 0 8C0 12.4178 3.58222 16 8 16ZM7.88622 2.90667C8.42133 2.90667 8.85511 3.34044 8.85511 3.87556C8.85511 4.41067 8.42133 4.84444 7.88622 4.84444C7.35111 4.84444 6.91733 4.41067 6.91733 3.87556C6.91911 3.34044 7.35289 2.90667 7.88622 2.90667ZM6.59911 7.05956C6.39289 6.99556 6.25067 6.80711 6.24889 6.59022C6.24889 6.32 6.46756 6.09956 6.73956 6.09956H8.66133C8.73422 6.09956 8.79111 6.15822 8.79111 6.22933V11.0524C8.79111 11.7867 9.12533 12.0444 9.39911 12.1333C9.60533 12.1973 9.74756 12.3858 9.74933 12.6027C9.74933 12.8729 9.53067 13.0933 9.25867 13.0933H6.73956C6.46933 13.0933 6.24889 12.8747 6.24889 12.6027C6.25067 12.3858 6.39289 12.1973 6.59911 12.1333C6.87289 12.0462 7.20889 11.7884 7.20889 11.0524V8.13867C7.20889 7.40444 6.87289 7.14667 6.59911 7.05956Z" />
    </x.svg>
  )
}

Help.propTypes = {
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
