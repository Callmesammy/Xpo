import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../Src/Onboarding';
import Password from '../Src/Password';
import Resetpass from '../Src/Resetpass';
import HomePage from '../Src/HomePage';
import Login from '../Src/Login';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Bord'>
      <Stack.Screen options={{headerShown: false, presentation: 'fullScreenModal'}} name="HME" component={HomePage} />
      <Stack.Screen options={{headerShown: false}} name="Bord" component={Onboarding} />
      <Stack.Screen options={{headerShown: false}} name="Pass" component={Password} />
      <Stack.Screen options={{headerShown: false}} name="Log" component={Login} />
      <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="Rpass" component={Resetpass} />


    </Stack.Navigator>
  </NavigationContainer>

  )
}