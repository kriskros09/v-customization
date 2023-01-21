import { x } from '@xstyled/styled-components'

import { GradientButton } from '@/common/components'
import { Close } from '@/common/components/Icons'
import { useUIContext } from '@/context/index'

const MODAL_CLOSE_ACTION = 'modal:close'

function ModalTemplate({ children, ...properties }) {
  return <x.div {...properties}>{children}</x.div>
}

function ContainerTemplate({ children, ...properties }) {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      p={10}
      mt={{ _: 24, md: 32 }}
      w={{ _: 'md', md: '2xl' }}
      h="sm"
      borderStyle="solid"
      borderWidth={{ _: 0, md: '0.063rem' }}
      borderColor="vuse-white"
      color="vuse-white"
      bg={{ _: 'transparent', md: 'black' }}
      opacity="0.9"
      {...properties}
    >
      {children}
    </x.div>
  )
}

const ModalContainer = ContainerTemplate
const ModalHeader = ModalTemplate
const ModalBody = ModalTemplate
const ModalFooter = ModalTemplate

export function DefaultModal() {
  const [, dispatch] = useUIContext()

  const handleClick = () => {
    dispatch({ type: MODAL_CLOSE_ACTION })
  }
  return (
    <ModalContainer>
      <ModalHeader display="flex" justifyContent="flex-end">
        <Close cursor="pointer" onClick={handleClick} />
      </ModalHeader>
      <ModalBody display="flex" justifyContent="center" flexGrow={1} py={12}>
        Body
      </ModalBody>
      <ModalFooter display="flex" justifyContent="space-between">
        {/* <Button onClick={handleClick}>Close</Button>
        <Button>Do nothing</Button> */}
      </ModalFooter>
    </ModalContainer>
  )
}

export function ErrorModal() {
  return <ModalContainer>Error Modal</ModalContainer>
}

export function InfoModal() {
  return <ModalContainer>Info Modal</ModalContainer>
}

export function ExitModal() {
  const [, dispatch] = useUIContext()

  const closeWarning = () => {
    dispatch({ type: MODAL_CLOSE_ACTION })
  }
  return (
    <ModalContainer>
      <ModalHeader display="flex" justifyContent="flex-end">
        <Close cursor="pointer" onClick={closeWarning} />
      </ModalHeader>
      <ModalBody
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        flexGrow={1}
        fontFamily="display"
        py={12}
        textTransform="uppercase"
        w={{ _: '100%', md: '60%' }}
        mx="auto"
      >
        <x.p fontWeight="bold" mb={4} fontSize="lg">
          YOU HAVE UNSAVED CHANGES
        </x.p>
        <x.p fontSize="base">
          ARE YOU SURE YOU WANT TO LEAVE? YOU CAN SAVE YOUR DESIGN AND COME BACK
          TO CONTINUE LATER.
        </x.p>
        <ModalFooter
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ _: 'column', md: 'row' }}
          mt={8}
        >
          <GradientButton
            mr={{ _: 0, md: 8 }}
            mb={{ _: 4, md: 0 }}
            textTransform="uppercase"
            onClick={closeWarning}
          >
            Save & edit later
          </GradientButton>
          <GradientButton onClick={closeWarning} borderColor="vuse-white">
            exit customization
          </GradientButton>
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  )
}

export function WarningModal() {
  const [, dispatch] = useUIContext()
  const closeWarning = () => {
    dispatch({ type: MODAL_CLOSE_ACTION })
  }
  return (
    <ModalContainer>
      <ModalHeader display="flex" justifyContent="flex-end">
        <Close cursor="pointer" onClick={closeWarning} />
      </ModalHeader>
      <ModalBody
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        flexGrow={1}
        fontFamily="display"
        py={12}
        textTransform="uppercase"
        w={{ _: '100%', md: '70%' }}
        mx="auto"
      >
        <x.p fontWeight="bold" mb={4} fontSize="lg">
          YOU NEED TO CLEAR SOME SPACE
        </x.p>
        <x.p fontSize="base">
          yOU HAVE REACHED THE MAXIMUM AMOUNT OF DESIGNS THAT CAN BE STORED IN
          YOUR ACCOUNT. Please delete 1 or more designs in order to create or
          save a new design.
        </x.p>
        <ModalFooter
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ _: 'column', md: 'row' }}
          mt={8}
        >
          <GradientButton
            mr={{ _: 0, md: 8 }}
            mb={{ _: 4, md: 0 }}
            textTransform="uppercase"
            onClick={closeWarning}
          >
            Save & edit later
          </GradientButton>
          <GradientButton onClick={closeWarning} borderColor="vuse-white">
            exit customization
          </GradientButton>
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  )
}

export function ChangeCustomizationMethod() {
  const [, dispatch] = useUIContext()

  const closeWarning = () => {
    dispatch({ type: MODAL_CLOSE_ACTION })
  }
  return (
    <ModalContainer>
      <ModalHeader display="flex" justifyContent="flex-end">
        <Close cursor="pointer" onClick={closeWarning} />
      </ModalHeader>
      <ModalBody
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        flexGrow={1}
        fontFamily="display"
        py={12}
        textTransform="uppercase"
        w={{ _: '100%', md: '60%' }}
        mx="auto"
      >
        <x.p fontWeight="bold" mb={4} fontSize="lg">
          HEADS UP!!
        </x.p>
        <x.p fontSize="base" textTransform="uppercase">
          If you switch from Patterns to Customize or vice versa without saving,
          you’ll lose your designs.
        </x.p>
        <ModalFooter
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ _: 'column', md: 'row' }}
          mt={8}
        >
          <GradientButton
            mr={{ _: 0, md: 8 }}
            mb={{ _: 4, md: 0 }}
            textTransform="uppercase"
            onClick={closeWarning}
          >
            Save & edit later
          </GradientButton>
          <GradientButton onClick={closeWarning} borderColor="vuse-white">
            exit experience
          </GradientButton>
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  )
}

export function BlackListValidatorModal() {
  const [, dispatch] = useUIContext()

  const closeWarning = () => {
    dispatch({ type: MODAL_CLOSE_ACTION })
  }

  return (
    <ModalContainer>
      <ModalHeader display="flex" justifyContent="flex-end">
        <Close cursor="pointer" onClick={closeWarning} />
      </ModalHeader>
      <ModalBody
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        flexGrow={1}
        fontFamily="display"
        py={12}
        textTransform="uppercase"
        w={{ _: '100%', md: '60%' }}
        mx="auto"
      >
        <x.p fontWeight="bold" mb={4} fontSize="lg">
          HEADS UP!!
        </x.p>
        <x.p fontSize="base" textTransform="uppercase">
          The use of profanity is not allowed.
        </x.p>
        <ModalFooter
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ _: 'column', md: 'row' }}
          mt={8}
        >
          <GradientButton
            mr={{ _: 0, md: 8 }}
            mb={{ _: 4, md: 0 }}
            textTransform="uppercase"
            onClick={closeWarning}
          >
            understood
          </GradientButton>
          <GradientButton onClick={closeWarning} borderColor="vuse-white">
            exit experience
          </GradientButton>
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  )
}
