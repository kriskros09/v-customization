import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Delete({ width, height, fill, ...properties }) {
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
        d="M33.5052 17.2934H29.7623V16.6129C29.7623 15.4872 28.8464 14.5713 27.7207 14.5713H24.9986C23.8728 14.5713 22.957 15.4872 22.957 16.6129V17.2934H19.214C18.2759 17.2934 17.5127 18.0566 17.5127 18.9948V21.3766C17.5127 21.7525 17.8174 22.0572 18.1932 22.0572H18.5651L19.1531 34.4039C19.205 35.4943 20.1008 36.3484 21.1923 36.3484H31.5269C32.6185 36.3484 33.5143 35.4943 33.5662 34.4039L34.1541 22.0572H34.526C34.9019 22.0572 35.2066 21.7525 35.2066 21.3766V18.9948C35.2066 18.0566 34.4434 17.2934 33.5052 17.2934ZM24.318 16.6129C24.318 16.2377 24.6233 15.9324 24.9986 15.9324H27.7207C28.0959 15.9324 28.4012 16.2377 28.4012 16.6129V17.2934H24.318V16.6129ZM18.8738 18.9948C18.8738 18.8071 19.0264 18.6545 19.214 18.6545H33.5052C33.6929 18.6545 33.8455 18.8071 33.8455 18.9948V20.6961C33.6358 20.6961 19.7428 20.6961 18.8738 20.6961V18.9948ZM32.2067 34.3391C32.1893 34.7026 31.8908 34.9873 31.5269 34.9873H21.1923C20.8285 34.9873 20.5299 34.7026 20.5126 34.3391L19.9277 22.0572H32.7915L32.2067 34.3391Z"
        fill="white"
      />
      <path
        d="M26.3602 33.6265C26.736 33.6265 27.0408 33.3218 27.0408 32.9459V24.099C27.0408 23.7232 26.736 23.4185 26.3602 23.4185C25.9844 23.4185 25.6797 23.7232 25.6797 24.099V32.9459C25.6797 33.3218 25.9844 33.6265 26.3602 33.6265Z"
        fill="white"
      />
      <path
        d="M29.7626 33.6265C30.1384 33.6265 30.4431 33.3218 30.4431 32.9459V24.099C30.4431 23.7232 30.1384 23.4185 29.7626 23.4185C29.3867 23.4185 29.082 23.7232 29.082 24.099V32.9459C29.082 33.3218 29.3867 33.6265 29.7626 33.6265Z"
        fill="white"
      />
      <path
        d="M22.9559 33.6265C23.3317 33.6265 23.6365 33.3218 23.6365 32.9459V24.099C23.6365 23.7232 23.3317 23.4185 22.9559 23.4185C22.5801 23.4185 22.2754 23.7232 22.2754 24.099V32.9459C22.2754 33.3218 22.5801 33.6265 22.9559 33.6265Z"
        fill="white"
      />
    </x.svg>
  )
}

Delete.propTypes = {
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
