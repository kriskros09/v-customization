import { x } from '@xstyled/styled-components'

// message to dislay when canvas object overlap
export function ObjectOverlap() {
  return (
    <x.p fontWeight="normal" fontSize={{ _: 'xs' }} color="red">
      One or more personalizations are overlapped or out of the dropping area.
      Modify your design to continue.
    </x.p>
  )
}
