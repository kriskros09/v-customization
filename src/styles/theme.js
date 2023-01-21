import { defaultTheme } from '@xstyled/styled-components'

export default {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    'vuse-black': '#141414',
    'vuse-gray': '#C4C4C4',
    'vuse-white': '#ffffff',
    'vuse-disabled': '#696666',
    'vuse-gradient':
      '312.27deg, #f05364 10.65%,#d48a46 33.08%,#bfb021 53.85%,#5ea774 72.13%,#00b3bd 93.73%',
    'vuse-gradient-2': '',
    'vuse-gradient-90deg':
      '90deg, #F05364 0%, #D48A46 24.6%, #BFB021 48.61%, #5EA774 73.21%, #00B3BD 100%'
  },
  fonts: {
    display: 'Gotham',
    secondary: 'TrimPoster'
  },

  gradient: {
    'vuse-gradient':
      'linear-gradient(90deg, #F05364 0%, #D48A46 24.6%, #BFB021 48.61%, #5EA774 73.21%, #00B3BD 100%)',
    'vuse-gradient-90deg':
      'linear-gradient(-90deg, #F05364 0%, #D48A46 24.6%, #BFB021 48.61%, #5EA774 73.21%, #00B3BD 100%)'
  },
  BorderGradient: {
    'vuse-gradient':
      'linear-gradient(#141414, #141414) padding-box, linear-gradient(135.27deg, #02a9b9 0%, #cab106 51.56%, #e94b5b 98.01%) border-box',
    'vuse-gradient-2':
      'linear-gradient(#141414, #141414) padding-box, linear-gradient(270deg, #F05364 0%, #D48A46 24.6%, #BFB021 48.61%, #5EA774 73.21%, #00B3BD 100%) border-box'
  },
  transitions: {
    left: 'left 0.5s ease-out',
    padding: 'padding 0.5s ease-out',
    transform: 'transform 0.3s ease-out'
  },

  zIndices: {
    modal: 1000,
    dialog: 900,
    tooltip: 800
  },
  screens: {
    // ...defaultTheme.screens,
    _: 0,
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    betweenld: 1100,
    xl: 1280,
    '2xl': 1536
  }
}
