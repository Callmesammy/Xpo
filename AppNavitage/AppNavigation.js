import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../Src/HomePage';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomePage} />
    </Stack.Navigator>
  </NavigationContainer>

  )
}