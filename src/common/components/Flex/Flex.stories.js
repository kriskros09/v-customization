import React from 'react'

import Box from '../Box/Box'
import Flex from './Flex'

export default {
  component: Flex,
  title: 'Atoms/Flex',
  parameters: {
    layout: 'centered'
  }
}

const Template = arguments_ => <Flex {...arguments_} />

export const Simple = Template.bind({})
Simple.args = {
  children: 'Hello World'
}

export const WithBackground = Template.bind({})
WithBackground.args = {
  children: (
    <>
      <Box>Box 1</Box> <Box>Box 2</Box>
    </>
  ),
  alignItems: 'center'
  // backgroundColor: 'text.primary',
  // color: 'white',
  // padding: 10,
  // borderRadius: 'md'
}
