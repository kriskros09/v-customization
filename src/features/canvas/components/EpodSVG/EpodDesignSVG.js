import { x } from '@xstyled/styled-components'
import { PropTypes } from 'prop-types'

function EpodDesignSVG({ width, height, viewBox }) {
  // console.log('EpodSVG', width, height, viewBox, fill)
  return (
    <x.svg width={width} height={height} viewBox={viewBox}>
      <path
        id="background"
        fill="none"
        d="M705.81,107.57,676.63,77.81h0l29.18-29.74c10-10,20.45-20.33,20.45-34.36h0V1.15h0c-2-.19-4.19-.12-5.69-.12H15.46l0,0V154.6H720.57c1.18,0,2.8,0,4.39-.05l1.3-.08V141.91c0-14-10.44-24.32-20.45-34.34ZM412,81.86H359.46a4.06,4.06,0,1,1,0-8.11H412a4.06,4.06,0,1,1,0,8.11Z"
      />
      <g id="outlines">
        <path
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          d="M725.5,154.55a13.71,13.71,0,0,0,4.28-.73c2.21-.94,15.13-6.11,15.13-6.11,44.8-15.21,85.49-14,89.59-14s4.74-4.22,4.74-4.22S849,102.19,849,77.68s-9.79-51.6-9.79-51.6-.63-4.23-4.71-4.23S789.71,23.11,744.91,7.9c0,0-12.92-5.17-15.13-6.11a10.59,10.59,0,0,0-3-.65"
        />
        <path
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          d="M704.85,77.81c0-33.79,21.94-37,21.94-64.1"
        />
        <path
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          d="M704.85,77.81c0,33.79,21.94,37,21.94,64.1"
        />
        <path
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          d="M688.26,77.81c0,11.5,8.86,20.52,18.09,29.76"
        />
        <path
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          d="M706.34,48.07c-9.22,9.24-18.08,18.26-18.08,29.74"
        />
        <path
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          d="M355.94,77.8H1"
        />
        <path
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          d="M677.17,77.8H416.61"
        />
        <path
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          d="M16,1,1,7.84V147.77l15,6.82"
        />
        <g id="background-2" data-name="background">
          <path
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2px"
            d="M706.81,107.57,677.63,77.81h0l29.18-29.74c10-10,20.45-20.33,20.45-34.36h0V1.15h0c-2-.19-4.19-.12-5.69-.12H16.46l0,0V154.6H721.57c1.18,0,2.8,0,4.39-.05l1.3-.08V141.91c0-14-10.44-24.32-20.45-34.34ZM413,81.86H360.46a4.06,4.06,0,1,1,0-8.11H413a4.06,4.06,0,1,1,0,8.11Z"
          />
        </g>
      </g>
      <path
        id="logo"
        fill="#ffffff"
        d="M49.62,57.88A18.28,18.28,0,1,0,31.35,39.6,18.29,18.29,0,0,0,49.62,57.88ZM55,48.82a3.28,3.28,0,0,1-1.29-.28h0l-5-2.44a.29.29,0,0,1,0-.51l5-2.44h0A2.83,2.83,0,0,1,55,42.87a3,3,0,1,1,0,6ZM41.23,37.25l15.92-7.53v5L42.92,41.49a3.05,3.05,0,0,1-.86.23,2.31,2.31,0,0,1-1.66-.57,2.2,2.2,0,0,1-.69-1.61A2.55,2.55,0,0,1,41.23,37.25Z"
      />{' '}
    </x.svg>
  )
}

const ResponsiveValueTypes = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string
])

const ResponsivePropertyType = PropTypes.objectOf({
  xs: PropTypes.instanceOf(ResponsiveValueTypes),
  sm: PropTypes.instanceOf(ResponsiveValueTypes),
  md: PropTypes.instanceOf(ResponsiveValueTypes),
  lg: PropTypes.instanceOf(ResponsiveValueTypes),
  xl: PropTypes.instanceOf(ResponsiveValueTypes)
})

EpodDesignSVG.propTypes = {
  width: PropTypes.oneOfType([ResponsivePropertyType, ResponsiveValueTypes]),
  height: PropTypes.oneOfType([ResponsivePropertyType, ResponsiveValueTypes]),
  viewBox: PropTypes.string,
  fill: PropTypes.string
}

EpodDesignSVG.defaultProps = {
  width: '851',
  height: '156',
  viewBox: '0 0 851 156',
  fill: 'none'
}

export { EpodDesignSVG }
