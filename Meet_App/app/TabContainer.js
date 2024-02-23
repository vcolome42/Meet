import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import homepage from './homepage';
import profile from './profile';
import chat from './chat';
import map from './map';
import saved from './saved';

const Tab = createBottomTabNavigator();

export default function TabContainer() {
  return (
    <Tab.Navigator
      initialRouteName="homepage"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === 'homepage') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (rn === 'chat') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (rn === 'map') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (rn === 'saved') {
            iconName = focused ? 'heart' : 'heart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="homepage" component={homepage} />
    </Tab.Navigator>
  );
}
