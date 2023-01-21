import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

import { Icon } from '@/common/components'

function Footer({ children, ...properties }) {
  return (
    <x.footer
      display="flex"
      flexDirection="row"
      alignItems="center"
      maxH="100%"
      p={3}
      color="white"
      borderColor="white"
      borderTopWidth="0.063rem"
      borderStyle="solid"
      {...properties}
      textAlign="justify"
    >
      <x.div w={{ _: '10%', lg: '8%' }}>
        <Icon
          icon="allages"
          w={{ _: '24px', md: '53px' }}
          h={{ _: '28px', md: '77px' }}
          fill="none"
          mx="auto"
        />
      </x.div>
      <x.div
        display="flex"
        flexDirection="column"
        w={{ _: '90%', lg: '92%' }}
        ml={{ _: 3, md: 3, xl: 0 }}
      >
        <x.span fontSize={{ _: 'xs', md: 'lg' }} fontWeight="bold">
          Nicotine is addictive
        </x.span>
        <x.p
          pt="1"
          lineHeight={{ _: '0.5rem', sm: '0.813rem' }}
          fontSize={{ _: '0.5rem', lg: '0.688rem' }}
        >
          Vuse products may be harmful to health and contain nicotine which is
          addictive.
          <x.span fontWeight="bold">
            VUSE PRODUCTS ARE NOT SUITABLE FOR USE BY:
          </x.span>
          persons who are not adults; persons who are under the legal age to
          purchase vaping products; persons who are allergic/sensitive to
          nicotine; pregnant or breast-feeding women; persons who have been
          advised to avoid using tobacco or nicotine products for medical
          reasons; persons with reduced physical, sensory, mental capabilities
          or lack of experience/knowledge unless they are under supervision or
          have been given instructions concerning the use of the product by a
          person responsible for their safety; and persons with an unstable
          heart condition, severe hypertension or diabetes. Keep Vuse products
          out of reach of children.
        </x.p>
      </x.div>
      {children}
    </x.footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node
}

export default Footer
