import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const BasicScreen = ({children, addStyle}) => {
  let style = styles.safeArea;
  if (addStyle) {
    style = StyleSheet.flatten([styles.safeArea, {...addStyle}]);
  }

  return <SafeAreaView style={style}>{children}</SafeAreaView>;
};
