import { useTh, x } from '@xstyled/styled-components'
import { useRouter } from 'next/router'

export default function NewDesignCta() {
  const vuseGradient_90deg = useTh('colors.vuse-gradient-90deg')
  const router = useRouter()

  const handleClick = () => {
    router.push('/customization')
  }

  return (
    <x.div
      cursor="pointer"
      onClick={handleClick}
      textAlign="center"
      background={`linear-gradient(${vuseGradient_90deg})`}
      py="1.125rem"
      display={{ _: 'block', md: 'none' }}
    >
      <x.p
        color="white"
        textTransform="uppercase"
        fontSize="xs"
        fontFamily="display"
        fontWeight="400"
        letterSpacing="0.074rem"
      >
        Create a new design
      </x.p>
    </x.div>
  )
}
