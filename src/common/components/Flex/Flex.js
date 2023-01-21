import { x } from '@xstyled/styled-components'

export default function Flex({ children, ...properties }) {
  return (
    <x.div display="flex" {...properties}>
      {children}
    </x.div>
  )
}
