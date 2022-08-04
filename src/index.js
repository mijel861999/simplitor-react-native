import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from '../screens/main-screen'
import NoteScreen from '../screens/note-screen'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator useLegacyImplementation={ true } initialRouteName='Main'>
      <Drawer.Screen name='Main' component={ MainScreen } />
      <Drawer.Screen name='Note' component={ NoteScreen } />
    </Drawer.Navigator>
  )
}

export default App
