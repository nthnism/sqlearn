import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ResultScreen, SQLScreen} from '../screens';

const Stack = createStackNavigator();

export const MainStack = () => (
  <Stack.Navigator initialRouteName="SQLScreens">
    <Stack.Screen name="SQLScreen" component={SQLScreen} />
    <Stack.Screen name="ResultScreen" component={ResultScreen} />
  </Stack.Navigator>
);
