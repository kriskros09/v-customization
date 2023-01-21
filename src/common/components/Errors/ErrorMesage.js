import { x } from '@xstyled/styled-components'

import { useErrorContext } from '@/context/index'

function ErrorMessageContainer({ children, ...properties }) {
  return <x.div {...properties}>{children}</x.div>
}

// Error message container
export default function ErrorMessage() {
  const [{ hasError }] = useErrorContext()

  return (
    <>
      {hasError.error ? (
        <ErrorMessageContainer
          textAlign="center"
          maxWidth="90%"
          w="100%"
          mx="auto"
          mb={{ betweenld: 14 }}
          mt={{ _: 7, sm: 2, betweenld: 0 }}
          position="absolute"
          bottom="0"
          left="50%"
          transform
          translateX="-50%"
        >
          {hasError.content}
        </ErrorMessageContainer>
      ) : null}
    </>
  )
}
