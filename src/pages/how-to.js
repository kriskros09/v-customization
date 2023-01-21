import { Modal, ModalPortal } from '@/common/components'
import { HowToView } from '@/features/how-to'

export default function HowTo() {
  return (
    <>
      <HowToView />
      <ModalPortal>
        <Modal />
      </ModalPortal>
    </>
  )
}
