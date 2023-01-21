import { x } from '@xstyled/styled-components'
//import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { SolidButton } from '@/common/components'

function AddToCart({ onClick, isPreview }) {
  //const router = useRouter()

  // const handleAddToCart = () => {
  //   router.push('/preview')
  // }

  return (
    <x.div
      col={1 / 3}
      justifyContent="flex-end"
      display={{ _: 'none', md: 'flex' }}
      flexDirection="column"
      alignItems="flex-end"
    >
      <x.p mb={6} fontFamily="display" fontWeight="400" fontSize="xs" pr={4}>
        ePod 2 CUSTOMIZED DESIGN
      </x.p>
      <SolidButton onClick={onClick} display={isPreview ? 'none' : 'block'}>
        <x.span>
          <x.span mr={2.5} fontWeight="bold" fontSize="sm">
            $16.99
          </x.span>
          ADD TO CART
        </x.span>
      </SolidButton>
    </x.div>
  )
}

AddToCart.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  isPreview: PropTypes.bool
}

export default AddToCart
