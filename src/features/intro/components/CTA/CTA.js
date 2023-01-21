import { x } from '@xstyled/styled-components'
import { useRouter } from 'next/router'

import { GradientButton, Logo, SolidButton } from '@/common/components'

export default function CTA() {
  const router = useRouter()

  const handleClick = event => {
    event.preventDefault()
    router.push(event.target.value)
  }

  return (
    <x.div
      display="flex"
      flexDirection="column"
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      minHeight="100%"
    >
      <x.div maxWidth={{ _: '80%', md: '70%', lg: '50%' }}>
        <Logo w={{ _: '250px', md: '456px' }} mx="auto" />
        <x.p
          fontFamily="display"
          fontWeight="400"
          fontSize={{ _: 'sm', md: 'lg', lg: 'xl' }}
          textAlign="center"
          color="white"
          lineHeight="tight"
          mt="10"
          mb="7"
        >
          Let this be your place of creativity. Full blown expression. Design to
          create something yours and solely your own. From canvas to customized,
          the Design Lab is all about the process. Workshop your idea. Test it.
          Twist it. Own it. And the result? A uniquely designed device ready to
          send to UV print.
        </x.p>
        <x.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <GradientButton
            onClick={handleClick}
            value="/customization"
            mr={{ _: 0, md: 8 }}
            mb={{ _: 7, md: 0 }}
            w={{ _: '224', md: 'auto' }}
          >
            start customizing
          </GradientButton>
          <SolidButton
            onClick={handleClick}
            value="/how-to"
            w={{ _: '224', md: 'auto' }}
          >
            view the how-to
          </SolidButton>
        </x.div>
      </x.div>
    </x.div>
  )
}
