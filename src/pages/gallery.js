import { Modal, ModalPortal } from '@/common/components'
import { GalleryView } from '@/features/gallery'

export default function Gallery() {
  return (
    <>
      <GalleryView />
      <ModalPortal>
        <Modal />
      </ModalPortal>
    </>
  )
}
