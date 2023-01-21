import { x } from '@xstyled/styled-components'
import { PropTypes } from 'prop-types'

function EpodClipModel({ width, height, viewBox }) {
  // console.log('EpodSVG', width, height, viewBox, fill)
  return (
    <x.svg width={width} height={height} viewBox={viewBox}>
      <path d="M835,77.2c0,24.79-9.82,52.3-9.82,52.3s-.6,4.23-4.71,4.23-44.88-1.21-89.76,14.1c0,0-12.92,5.24-15.12,6.15a16.91,16.91,0,0,1-4.31.71h.8l-1.3.1H0V0H706.37L709,0c1,0,2.05,0,3.05.12h.5a11.94,11.94,0,0,1,3,.61l15.12,6.14C775.59,22.29,816.37,21,820.47,21s4.71,4.23,4.71,4.23S835,52.52,835,77.2Z" />
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

EpodClipModel.propTypes = {
  width: PropTypes.oneOfType([ResponsivePropertyType, ResponsiveValueTypes]),
  height: PropTypes.oneOfType([ResponsivePropertyType, ResponsiveValueTypes]),
  viewBox: PropTypes.string,
  fill: PropTypes.string
}

EpodClipModel.defaultProps = {
  width: '835',
  height: '154.79',
  viewBox: '0 0 835 154.79',
  fill: 'none'
}

export { EpodClipModel }
