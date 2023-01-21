import { Modal, ModalPortal } from '@/common/components'
import { CustomizationView } from '@/features/customization'

export default function Customization() {
  return (
    <>
      <CustomizationView />
      <ModalPortal>
        <Modal />
      </ModalPortal>
    </>
  )
}
