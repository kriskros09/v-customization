import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Undo({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      fill={fill}
      viewBox="0 0 15 13"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <path d="M9.36111 0.646829C12.4704 0.646829 15 3.17663 15 6.28573L15 8.2818C15 8.61257 14.732 8.88063 14.4012 8.88063L14.2016 8.88063C13.8708 8.88063 13.6028 8.61261 13.6028 8.2818L13.6028 6.28573C13.6028 3.94698 11.6999 2.04407 9.36111 2.04407C7.02236 2.04407 5.11946 3.94698 5.11946 6.28573L5.11946 9.96836L7.65568 7.43213C7.92799 7.15973 8.37129 7.15973 8.6436 7.43213C8.90772 7.69646 8.90733 8.15648 8.6436 8.42021L4.91486 12.1488C4.78291 12.2808 4.60746 12.3535 4.4208 12.3535C4.23428 12.3535 4.05873 12.2808 3.92685 12.1488L0.197946 8.42001C-0.0659823 8.15628 -0.0659824 7.69587 0.197946 7.4321C0.470185 7.1597 0.913551 7.1597 1.18576 7.4321L3.72218 9.96833L3.72218 6.28573C3.72218 3.17663 6.25188 0.646829 9.36111 0.646829Z" />
    </x.svg>
  )
}

Undo.propTypes = {
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
