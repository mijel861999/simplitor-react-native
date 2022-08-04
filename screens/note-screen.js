import React from 'react'
import { Box, Text, VStack, TextArea } from 'native-base'

const NoteScreen = () => {
  return (
    <VStack flex={1}>
      <Box>
        <Text>Simplitor</Text>
      </Box>
      <Box>
        <TextArea h='full' placeholder="Text Area Placeholder" /> 
      </Box>
    </VStack>
  )
}

export default NoteScreen

