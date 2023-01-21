import InvertedButton from './Inverted'

export default {
  component: InvertedButton,
  title: 'Atoms/Buttons/Inverted',
  parameters: {
    layout: 'centered'
  }
}

const Template = arguments_ => <InvertedButton {...arguments_} />

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
