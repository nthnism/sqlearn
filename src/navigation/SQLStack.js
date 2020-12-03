import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ResultScreen, SQLScreen} from '../components/screens';

const Stack = createStackNavigator();

export const SQLStack = () => (
  <Stack.Navigator initialRouteName="SQLScreen">
    <Stack.Screen
      name="SQLScreen"
      component={SQLScreen}
      options={{title: 'SQL anwenden'}}
    />
    {/* <Stack.Screen name="ResultScreen" component={ResultScreen} /> */}
  </Stack.Navigator>
);
