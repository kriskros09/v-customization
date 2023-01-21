import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Edit({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      viewBox="0 0 52 51"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <circle cx="26.3604" cy="25.5" r="25" stroke="white" />
      <path
        d="M22.2179 35.754L22.2138 35.7458C22.2115 35.7405 22.2085 35.7358 22.2062 35.7306L20.3872 32.042C20.3103 31.8864 20.0799 31.8864 20.0031 32.042L18.1852 35.7282C18.1823 35.7347 18.1788 35.7405 18.1758 35.7469L18.1723 35.754C18.0345 36.0429 17.9577 36.3652 17.9577 36.7056C17.9577 37.934 18.961 38.9336 20.1948 38.9336C21.428 38.9336 22.4319 37.934 22.4319 36.7056C22.4319 36.3652 22.3551 36.0429 22.2179 35.754ZM29.6001 15.1803L29.6042 15.1884C29.6066 15.1937 29.6089 15.1984 29.6119 15.2037L31.4309 18.8916C31.5077 19.0472 31.7382 19.0472 31.815 18.8916L33.6328 15.2054C33.6358 15.199 33.6393 15.1931 33.6422 15.1867L33.6457 15.1797C33.7835 14.8907 33.8604 14.5684 33.8604 14.228C33.8604 12.9996 32.857 12 31.6232 12C30.39 12 29.3861 12.9996 29.3861 14.228C29.3855 14.569 29.4629 14.8919 29.6001 15.1803ZM17.8604 12.5329L30.0997 38.3393H33.8592L21.5787 12.5329H17.8604Z"
        fill="url(#paint0_linear_385_7648)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_385_7648"
          x1="32.2718"
          y1="39.078"
          x2="19.5576"
          y2="11.7436"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9485D" />
          <stop offset="0.2749" stopColor="#D98E3E" />
          <stop offset="0.516" stopColor="#C8B500" />
          <stop offset="0.7442" stopColor="#65A76E" />
          <stop offset="1" stopColor="#00A9B9" />
        </linearGradient>
      </defs>
    </x.svg>
  )
}

Edit.propTypes = {
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
