import ToggleButton from './Toggle'

export default {
  component: ToggleButton,
  title: 'Atoms/Buttons/Toggle',
  parameters: {
    layout: 'centered'
  }
}

const Template = arguments_ => <ToggleButton {...arguments_} />

export const Simple = Template.bind({})
Simple.args = {
  children: 'Click me!'
}

export const Rounded = Template.bind({})
Rounded.args = {
  children: 'Click me',
  bg: 'white',
  color: 'vuse-black',
  py: 4,
  px: 5,
  borderRadius: '3xl',
  fontFamily: 'body'
}
