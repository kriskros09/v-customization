import styled from '@xstyled/styled-components'
import { x } from '@xstyled/styled-components'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { WarningModal } from '@/common/components'
import {
  Container as GalleryContainer,
  GradientButton,
  Logo,
  View as GalleryView
} from '@/common/components'
import useWindowDimensions from '@/common/hooks/useWindowDimensions'
import { useUIContext } from '@/context/index'

import DesignCard from './components/DesignCard'
import DesignCardMobile from './components/mobile/DesignCardMobile'
import NewDesignCta from './components/mobile/NewDesignCta'
import UserGreeting from './components/UserGreeting'

/**
 * TODO: remove when save to gallery logic exists
 * Proper flow should be to add 1 to gallery from customization, on mount this should fetch saved designs
 * if the total number of designs is greater than MAX_DESIGNS, show a warning modal
 */
const MAX_DESIGNS = 15
const savedDesigns = Array.from({ length: 2 }).fill(null)

const DesignCardList = () => {
  const router = useRouter()
  const [, dispatch] = useUIContext()
  const [designs, setDesigns] = useState(savedDesigns)

  const handleNewDesign = () => {
    router.push('/customization')
  }

  const triggerModal = useCallback(() => {
    dispatch({
      type: 'modal:open',
      payload: { type: 'default', content: <WarningModal /> }
    })
  }, [dispatch])

  useEffect(() => {
    if (designs.length > MAX_DESIGNS) {
      triggerModal()
    }
  }, [designs, triggerModal])
  return (
    <>
      <Logo w={{ _: '120px', md: '180px' }} mx="auto" mb={6} />
      <x.div row justifyContent="center">
        <x.div col={{ md: 1 / 3, lg: 1 / 5, '2xl': 1 / 5 }}>
          <UserGreeting />
          <GradientButton
            onClick={handleNewDesign}
            ml={{ _: 0, md: 6, lg: 0 }}
            mt={6}
          >
            Create a new design
          </GradientButton>
          <GradientButton
            mt={6}
            ml={{ _: 0, md: 6, lg: 0 }}
            onClick={() => {
              if (designs.length < MAX_DESIGNS) {
                setDesigns(() => [...designs, {}])
              } else {
                triggerModal()
              }
            }}
          >
            add design
          </GradientButton>
        </x.div>
        <x.div col={{ md: 2 / 3, lg: 3 / 4, '2xl': 3 / 4 }} textAlign="center">
          <x.div row>
            {designs.map((_, index) => (
              <DesignCard key={index} />
            ))}
          </x.div>
        </x.div>
      </x.div>
    </>
  )
}

const ScrollContainer = styled.div`
  display: flex;
  overflow: auto hidden;
  overflow: scroll;
  // &::-webkit-scrollbar {
  //   background-color: transparent;
  // }
  // ::-webkit-scrollbar-track {
  //   background: transparent;
  // }
  // &::-webkit-scrollbar-thumb {
  //   background: transparent;
  // }
`

const MobileCardList = () => {
  //remove when save to gallery logic exists
  const mobileSavedDesigns = Array.from({ length: 12 })
    .fill(null)
    .map((mobileCards, index) => (
      <DesignCardMobile card={mobileCards} key={index} />
    ))
  return (
    <>
      <Logo w={{ _: '120px', md: '180px' }} mx="auto" mb={6} />
      <UserGreeting />
      <ScrollContainer>{mobileSavedDesigns}</ScrollContainer>
    </>
  )
}

export default function View() {
  const viewport = useWindowDimensions()

  return (
    <GalleryView>
      <GalleryContainer justifyContent="flex-end">
        {viewport.width < 768 ? <MobileCardList /> : <DesignCardList />}
      </GalleryContainer>
      <NewDesignCta />
    </GalleryView>
  )
}
