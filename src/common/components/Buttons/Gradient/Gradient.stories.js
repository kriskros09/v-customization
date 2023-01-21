import Gradient from './Gradient'

export default {
  component: Gradient,
  title: 'Atoms/Buttons/Gradient',
  parameters: {
    layout: 'centered'
  }
}

const Template = arguments_ => <Gradient {...arguments_} />

export const Default = Template.bind({})
Default.args = {
  children: 'Click me!'
}

// export const Rounded = Template.bind({})
// Rounded.args = {
//   children: 'Click me',
//   bg: 'white',
//   color: 'vuse-black',
//   py: 4,
//   px: 5,
//   borderRadius: '3xl',
//   fontFamily: 'body'
// }
