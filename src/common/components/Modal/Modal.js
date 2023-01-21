import { x } from '@xstyled/styled-components'

import { useUIContext } from '@/context/index'

function ModalBackDrop({ children, ...properties }) {
  return (
    <x.div
      position="fixed"
      zIndex="modal"
      left={0}
      top={0}
      w="100%"
      h="100%"
      overflow="auto"
      backgroundColor={{ _: 'black', md: 'transparent' }}
      opacity={{ _: '0.9', md: '1' }}
      display="flex"
      justifyContent="center"
      alignContent="center"
      {...properties}
    >
      {children}
    </x.div>
  )
}

export default function Modal() {
  const [{ modal }] = useUIContext()

  return (
    <>{modal.isOpen ? <ModalBackDrop>{modal.content}</ModalBackDrop> : null}</>
  )
}
