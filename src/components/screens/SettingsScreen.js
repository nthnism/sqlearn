import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {BasicScreen} from './BasicScreen';

const styles = StyleSheet.create({
  upperContainer: {
    padding: 20,
  },
});

export const SettingsScreen = (props) => {
  const {navigation} = props;
  return (
    <BasicScreen>
      <Button title="Datenbank zurücksetzen" onPress={() => {}} />
    </BasicScreen>
  );
};
