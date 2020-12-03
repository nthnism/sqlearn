import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {MainStack} from './MainStack';
import {SettingsStack} from './SettingsStack';

const DrawerNav = createDrawerNavigator();

export const Drawer = () => (
  <DrawerNav.Navigator initialRouteName="SQL üben">
    <DrawerNav.Screen name="SQL üben" component={MainStack} />
    <DrawerNav.Screen name="Einstellungen" component={SettingsStack} />
  </DrawerNav.Navigator>
);
