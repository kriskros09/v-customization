import dynamic from 'next/dynamic'
import React, { useState } from 'react'

import {
  Container as IntroContainer,
  View as IntroView
} from '@/common/components'

const IntroVideo = dynamic(
  () => import('./components/Video/IntroVideo')
  // console.log('Dynamic intro vid for index page')
)

const CTA = dynamic(
  () => import('./components/CTA/CTA')
  // console.log('Dynamic CTA for index page')
)

export default function View() {
  const [skipped, setSkipped] = useState(false)

  return (
    <IntroView>
      {!skipped ? (
        <IntroVideo isSkipped={() => setSkipped(true)} />
      ) : (
        <IntroContainer>
          <CTA />
        </IntroContainer>
      )}
    </IntroView>
  )
}
