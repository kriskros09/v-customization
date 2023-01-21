import { x } from '@xstyled/styled-components'
import styled from '@xstyled/styled-components'

import { Icon, InvertedButton, SolidButton } from '@/common/components'

const CardContainer = styled.div`
  text-align: center;
  margin-right: 2rem;
  @media (min-width: 375px) {
    margin-left: 1.75rem;
  }
  @media (min-width: 400px) {
    margin-left: 2.7rem;
  }

  &:first-child {
    margin-left: 4.5rem;
    @media (min-width: 375px) {
      margin-left: 6rem;
    }
    @media (min-width: 400px) {
      margin-left: 7.5rem;
    }
  }
`

export default function DesignCardMobile() {
  return (
    <CardContainer>
      <x.div
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        color="white"
        px={4}
        mt={8}
        mb={4}
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
      <SolidButton
        minWidth="175px"
        bg="transparent"
        color="white"
        borderColor="white"
        borderWidth="1px"
        mx="auto"
        mb={4}
      >
        ADD TO CART
      </SolidButton>
    </CardContainer>
  )
}
