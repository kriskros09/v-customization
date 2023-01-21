import { x } from '@xstyled/styled-components'

import { Icon, InvertedButton, SolidButton } from '@/common/components'

export default function DesignCard() {
  return (
    <x.div col={{ md: 1 / 2, lg: 1 / 3, xl: 1 / 4, '2xl': 1 / 4 }}>
      <x.div mx={{ _: '', md: 10, lg: 10, xl: 11, '2xl': 16 }} mt={8} mb={4}>
        <x.div
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="flex-start"
          borderBottomColor="white"
          borderBottomWidth="2px"
          pb={4}
        >
          <x.div>
            <x.img src="/img/vape-placeholder.png" alt="new design" />
          </x.div>
          <x.div pl={4}>
            <InvertedButton flexDirection="column" mb={6} w="100%">
              <Icon icon="edit" w="52px" h="51px" mx="auto" mb={3.5} />
              <x.span
                fontFamily="display"
                fontWeight="500"
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="0.063rem"
              >
                Edit
              </x.span>
            </InvertedButton>
            <InvertedButton flexDirection="column" w="100%">
              <Icon icon="delete" w="52px" h="51px" mx="auto" mb={3.5} />
              <x.span
                fontFamily="display"
                fontWeight="500"
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="0.063rem"
              >
                Delete
              </x.span>
            </InvertedButton>
          </x.div>
        </x.div>
      </x.div>
      <x.p
        fontFamily="display"
        fontWeight="900"
        color="white"
        fontSize="0.625rem"
        pb={2}
        letterSpacing="1px"
      >
        UV PRINT
      </x.p>
      <x.p
        color="white"
        fontSize="base"
        fontFamily="display"
        fontWeight="700"
        letterSpacing="1px"
        pb={4}
      >
        ePod 2 - ART 001A
      </x.p>
      <SolidButton
        minWidth="175px"
        bg="transparent"
        color="white"
        borderColor="white"
        borderWidth="1px"
        mx="auto"
        mb={8}
      >
        ADD TO CART
      </SolidButton>
    </x.div>
  )
}
