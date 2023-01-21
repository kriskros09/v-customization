import { x } from '@xstyled/styled-components'

export default function UserGreeting() {
  return (
    <x.div
      mt={{ _: 0, md: 8 }}
      color="white"
      textAlign={{ _: 'center', md: 'left' }}
      ml={{ _: 0, md: 6, lg: 0 }}
    >
      <x.p
        fontSize="2xl"
        textTransform="uppercase"
        fontFamily="secondary"
        mb={6}
      >
        Your designs
      </x.p>
      <x.p fontFamily="display" fontSize="sm" fontWeight="400">
        <x.span fontWeight="500">Welcome Gabriela,</x.span> Here are your saved
        designs.
      </x.p>
    </x.div>
  )
}
