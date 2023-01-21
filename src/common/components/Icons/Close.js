import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Close({
  width = '17',
  height = '19',
  viewBox = '0 0 17 19',
  fill = 'none',
  ...properties
}) {
  return (
    <x.svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path
        d="M15.5561 1.07038L1.06173 16.697C0.839849 16.9362 0.839851 17.3241 1.06174 17.5633C1.28362 17.8025 1.64337 17.8025 1.86525 17.5633L16.3596 1.93667C16.5804 1.69855 16.5868 1.30784 16.3631 1.06661C16.1393 0.825388 15.7769 0.832262 15.5561 1.07038Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        d="M16.3615 16.6932L1.86717 1.06656C1.64528 0.827338 1.28554 0.827341 1.06365 1.06656C0.841769 1.30578 0.841769 1.69363 1.06365 1.93284L15.558 17.5594C15.7788 17.7976 16.1412 17.8044 16.365 17.5632C16.5887 17.322 16.5824 16.9313 16.3615 16.6932Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </x.svg>
  )
}

Close.propTypes = {
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
