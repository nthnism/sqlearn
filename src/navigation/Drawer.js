import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {SQLStack} from './SQLStack';
import {SettingsStack} from './SettingsStack';

const DrawerNav = createDrawerNavigator();

export const Drawer = () => (
  <DrawerNav.Navigator initialRouteName="SQLStack">
    <DrawerNav.Screen
      name="SQLStack"
      component={SQLStack}
      options={{title: 'SQL anwenden'}}
    />
    <DrawerNav.Screen
      name="SettingsStack"
      component={SettingsStack}
      options={{title: 'Einstellungen'}}
    />
  </DrawerNav.Navigator>
);
