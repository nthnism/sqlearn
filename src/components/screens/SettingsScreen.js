import React from 'react';
import {Button} from 'react-native';
import {BasicScreen} from './BasicScreen';

export const SettingsScreen = (props) => {
  const {navigation} = props;
  return (
    <BasicScreen addStyle={{backgroundColor: 'green'}}>
      <Button title="Einstellungen" onPress={() => {}} />
    </BasicScreen>
  );
};
