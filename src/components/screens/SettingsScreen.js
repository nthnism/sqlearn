import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BasicScreen} from './BasicScreen';

const styles = StyleSheet.create({
  addStyle: {
    justifyContent: 'space-around',
  },
  paragraph: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  view: {
    width: '100%',
  },
});

export const SettingsScreen = (props) => {
  const {navigation} = props;
  return (
    <BasicScreen addStyle={styles.addStyle}>
      <View style={styles.view}>
        <Text style={styles.paragraph}>Hier kannst du das ER-Diagramm zur Datenbank betrachten</Text>
        <Button title="Diagramm ansehen" onPress={() => {}} />
      </View>
      <View style={styles.view}>
        <Text style={styles.paragraph}>Hier kannst du die Datenbank zurücksetzen</Text>
        <Button title="Datenbank zurücksetzen" onPress={() => {}} />
      </View>
    </BasicScreen>
  );
};
