import Box from './Box'

export default {
  component: Box,
  title: 'Atoms/Box',
  parameters: {
    layout: 'centered'
  }
}

const Template = arguments_ => <Box {...arguments_} />

export const Simple = Template.bind({})
Simple.args = {
  children: 'Hello World'
}

export const WithBackground = Template.bind({})
WithBackground.args = {
  children: 'Hello World',
  bg: 'indigo-500',
  color: 'white',
  padding: 10,
  borderRadius: 'md'
}
