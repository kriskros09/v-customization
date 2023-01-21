import { Modal, ModalPortal } from '@/common/components'
import { PreviewView } from '@/features/preview'

export default function Preview() {
  return (
    <>
      <PreviewView />
      <ModalPortal>
        <Modal />
      </ModalPortal>
    </>
  )
}
