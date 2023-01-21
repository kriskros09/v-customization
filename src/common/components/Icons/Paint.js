import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Paint({ width, height, fill, ...properties }) {
  return (
    <x.svg
      w={width}
      h={height}
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <mask
        id="mask0_320_4488"
        //style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="23"
      >
        <path
          d="M10.7337 22.9622C10.9747 22.9622 11.206 22.8677 11.3775 22.698L20.8399 13.3318L21.977 14.4577C22.2552 14.7332 22.7048 14.7332 22.9814 14.4577C23.258 14.1822 23.2596 13.737 22.9814 13.4631L9.59501 0.206607C9.3168 -0.0688691 8.86713 -0.0688691 8.59054 0.206607C8.31233 0.482084 8.31233 0.92733 8.59054 1.20121L9.72926 2.32874L0.266887 11.6965C-0.0889625 12.0489 -0.0889625 12.6207 0.266887 12.9746L10.0867 22.698C10.2582 22.8677 10.4911 22.9622 10.7337 22.9622ZM10.7337 3.32494L19.2628 11.7702H2.1998L10.7337 3.32494Z"
          fill="white"
        />
        <path
          d="M24.7483 19.5369L23.6112 16.4138C23.5546 16.2585 23.3815 16.1784 23.2246 16.2344C23.1405 16.2649 23.0725 16.3305 23.0434 16.4138L21.9063 19.5369C21.6233 20.3137 22.0309 21.1722 22.8154 21.4525C23.5998 21.7328 24.4668 21.3291 24.7499 20.5524C24.868 20.224 24.868 19.8653 24.7483 19.5369Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_320_4488)">
        <rect width="25" height="23" fill="#C4C4C4" />
        <rect
          width="25"
          height="23"
          fill={fill === 'none' ? 'url(#icon-paint)' : fill}
        />
      </g>
      <defs>
        <linearGradient
          id="icon-paint"
          x1="25"
          y1="17.5"
          x2="14.1524"
          y2="-2.6274"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F05364" />
          <stop offset="0.27" stopColor="#D48A46" />
          <stop offset="0.52" stopColor="#BFB021" />
          <stop offset="0.74" stopColor="#5EA774" />
          <stop offset="1" stopColor="#00B3BD" />
        </linearGradient>
      </defs>
    </x.svg>
  )
}

Paint.propTypes = {
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
  fill: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ])
}
