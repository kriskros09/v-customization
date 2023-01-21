import { Preflight, ThemeProvider } from '@xstyled/styled-components'
import { PropTypes } from 'prop-types'
import React, { useEffect, useState } from 'react'

import { AppContextProvider } from '@/context/index'
import { GlobalStyle } from '@/styles/global'
import theme from '@/styles/theme'

function App({ Component, pageProps }) {
  const [hasHydrated, sethasHydrated] = useState(false)

  useEffect(() => {
    sethasHydrated(true)
  }, [])

  if (!hasHydrated) {
    return null
  }

  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Preflight />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContextProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
