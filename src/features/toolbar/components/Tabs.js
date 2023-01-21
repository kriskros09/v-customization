import { useTh, x } from '@xstyled/styled-components'
import { PropTypes } from 'prop-types'

import { InvertedButton } from '@/common/components'

function Tabs({ tabs, activeTab, setActivetab }) {
  const vuseGradient = useTh('BorderGradient.vuse-gradient')
  return (
    <x.div display="flex" justifyContent="center" mt="17px" mb="27px">
      {tabs.map((tab, index) => (
        <InvertedButton
          key={index}
          onClick={() =>
            // dispatch({
            //   type: 'ui:toggle-sublist',
            //   payload: { currentStep: isActive, sublist: key }
            // })
            setActivetab(tab.label)
          }
          fontSize={{ _: '0.5rem', md: '0.75rem' }}
          opacity={{ _: activeTab === tab.label ? 1 : 0.25, hover: 1 }}
          borderBottomWidth={'2px'}
          borderStyle="solid"
          background={activeTab === tab.label ? vuseGradient : 'unset'}
          borderColor="transparent"
          px={0}
          pb={0.5}
          mx={{ _: 4, md: 5 }}
        >
          {tab.label}
        </InvertedButton>
      ))}
    </x.div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string }))
    .isRequired,
  activeTab: PropTypes.string,
  setActivetab: PropTypes.func.isRequired
}

export default Tabs
