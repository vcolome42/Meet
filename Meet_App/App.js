// AppNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import startUp from './app/startUp';
import { NavigationContainer } from '@react-navigation/native';
// Import your new screen here
import createAcc from './app/createAcc';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="startUp" component={startUp} />
      <Stack.Screen name="createAcc" component={createAcc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}