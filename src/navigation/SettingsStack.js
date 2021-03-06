import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ERScreen, SettingsScreen} from '../components/screens';

const Stack = createStackNavigator();

export const SettingsStack = () => (
  <Stack.Navigator initialRouteName="SettingsScreen">
    <Stack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{title: 'Einstellungen'}}
    />
    <Stack.Screen
      name="ERScreen"
      component={ERScreen}
      options={{title: 'Diagramm'}}
    />
  </Stack.Navigator>
);
