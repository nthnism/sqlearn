import React from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 20,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});

export const BasicScreen = ({children, addStyle}) => {
  let style = styles.keyboardAvoidingView;
  if (addStyle) {
    style = StyleSheet.flatten([styles.safeArea, {...addStyle}]);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={style} behavior="height">
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
