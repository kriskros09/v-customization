import { x } from '@xstyled/styled-components'

export default function Box({ children, ...properties }) {
  return <x.div {...properties}>{children}</x.div>
}
