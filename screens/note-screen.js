import React from 'react'
import { Box, Text, VStack, TextArea } from 'native-base'
import { Keyboard, TouchableWithoutFeedback, View, ScrollView } from 'react-native'
import DismissKeyboardHOC from '../components/keyboard'

const NoteScreen = () => {
  return (
    <VStack flex={1} _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} flex={1}>
      <Box p={4}>
        <Text>Simplitor</Text>
      </Box>
      <DismissKeyboardHOC>
        <TextArea
          h={100} w='full'
          borderColor='blueGray.900'
          placeholder="Text Area Placeholder"
          _dark={{ color: 'white' }} _light={{ bg: 'black' }}
        />
      </DismissKeyboardHOC>
    </VStack>
  )
}

export default NoteScreen

