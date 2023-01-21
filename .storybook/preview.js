// import * as NextImage from 'next/image'
import { ThemeProvider } from 'styled-components'

import theme from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/global'
// const OriginalNextImage = NextImage.default

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: props => <OriginalNextImage {...props} unoptimized />
// })

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: theme.colors['vuse-black'],
    values: [
      { name: 'white', value: theme.colors.white },
      { name: 'black', value: theme.colors['vuse-black'] }
    ]
  }
}
