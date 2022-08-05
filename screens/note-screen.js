import React from 'react'
import { ArrowBack, Box, Text, VStack, TextArea, Button } from 'native-base'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'

const NoteScreen = () => {
  return (
    <VStack flex={1} _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} flex={1}>
      <Box p={4}>
        <Button w={120}>Atrás</Button>
        <Text>Simplitor</Text>
      </Box>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex: 1}}>
          <TextArea
            _dark={{ color: 'blueGray.50', bg: 'blueGray.900' }}
            _light={{ color: 'blueGray.900', bg: 'blueGray.50' }}
            h={100}
            borderWidth={0}
            placeholder="Text Area Placeholder"
            w="100%"
          />
        </View>
      </TouchableWithoutFeedback>
    </VStack>
  )
}

export default NoteScreen

