import PropTypes from 'prop-types'

import { GradientCustomizer } from './components/GradientCustomizer/GradientCustomizer'
import { Toolbar } from './Toolbar'

function View({ isPreview }) {
  return (
    <>
      <GradientCustomizer isPreview={isPreview} />
      {!isPreview && <Toolbar />}
    </>
  )
}

View.propTypes = {
  isPreview: PropTypes.bool
}

export { View }
