import React from 'react';
import {Button} from 'react-native';
import {BasicScreen} from './BasicScreen';

export const SQLScreen = (props) => {
  const {navigation} = props;
  return (
    <BasicScreen addStyle={{backgroundColor: 'lightblue'}}>
      <Button
        title="Statement ausführen"
        // onPress={() => navigation.navigate('ResultScreen')}
      />
    </BasicScreen>
  );
};
