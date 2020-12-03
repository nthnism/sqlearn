import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {SQLStack} from './SQLStack';
import {SettingsStack} from './SettingsStack';

const DrawerNav = createDrawerNavigator();

export const Drawer = () => (
  <DrawerNav.Navigator initialRouteName="SQL anwenden">
    <DrawerNav.Screen name="SQL anwenden" component={SQLStack} />
    <DrawerNav.Screen name="Einstellungen" component={SettingsStack} />
  </DrawerNav.Navigator>
);
