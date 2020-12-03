import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Drawer} from './src/navigation/Drawer';
import {store} from './src/redux/store';

export const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Drawer />
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};
