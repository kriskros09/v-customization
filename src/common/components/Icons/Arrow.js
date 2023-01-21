import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Arrow({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      viewBox="0 0 19 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M7.33467 1.22185L7.34759 1.20918L7.35855 1.19478C7.52599 0.974841 7.47945 0.661528 7.25829 0.498123C7.08016 0.366511 6.83986 0.366511 6.66173 0.498123L6.64769 0.508495L6.63523 0.520717L0.896055 6.15007L0.896035 6.15005L0.893369 6.15275C0.70221 6.34602 0.70221 6.65523 0.893369 6.8485L0.893354 6.84851L0.895667 6.85079L6.60989 12.4801L6.62252 12.4926L6.63678 12.5031C6.85572 12.6649 7.16788 12.622 7.3336 12.4043C7.46908 12.2264 7.46908 11.9844 7.3336 11.8065L7.32281 11.7923L7.31013 11.7798L2.45466 6.99645L17.4652 6.99645C17.737 6.99645 17.9647 6.77741 17.9647 6.50062C17.9647 6.22383 17.737 6.0048 17.4652 6.0048L2.45671 6.0048L7.33467 1.22185Z"
        fill="none"
        stroke={fill}
        strokeWidth="0.5"
      />
    </x.svg>
  )
}

Arrow.propTypes = {
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
