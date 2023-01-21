import { createGlobalStyle } from '@xstyled/styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --swiper-theme-color: white;
}

// e.g Fonts used in canvas

@font-face {
  font-family: "A Bebedera";
  src: local("A Bebedera"), url("/fonts/customization/a-bebedera.ttf") format('truetype');
  font-style: normal;
}
@font-face {
  font-family: "Addictive-regular";
  src: local("Addictive-regular"), url("/fonts/customization/addictive-regular.otf") format('opentype');
  font-style: normal;
}


  body {
    background-color: #141414;
    font-family: 'Gotham'
  }

  a,button {
    &:focus {
      outline: none
    }
  }

  `
