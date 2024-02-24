// AppNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import startUp from './app/startUp';
import { NavigationContainer } from '@react-navigation/native';
// Import your new screen here
import createAcc from './app/createAcc';
import login from './app/login';
import homepage from './app/homepage';
import profile from './app/profile';
import chat from './app/chat';
import map from './app/map';
import saved from './app/saved';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="startUp" component={startUp} />
      <Stack.Screen name="createAcc" component={createAcc} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="homepage" component={homepage} />
      <Stack.Screen name="profile" component={profile} />
      <Stack.Screen name="chat" component={chat} /> 
      <Stack.Screen name="map" component={map} />
      <Stack.Screen name="saved" component={saved} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}