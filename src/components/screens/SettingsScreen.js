import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

import {BasicScreen} from './BasicScreen';
import {restoreDatabaseStatement} from '../helpers/restoreDatabaseStatement';

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

  const resetDatabase = () => {
    Alert.alert(
      'Hier wird noch gebaut!',
      'Bitte später wiederkommen',
      [
        {
          text: 'Na gut...',
          onPress: () => {},
        },
      ],
      {cancelable: false},
    );

    // leider noch nicht funktional
    // const db = SQLite.openDatabase(
    //   {
    //     name: 'chinook.db',
    //     createFromLocation: '~chinook.db',
    //   },
    //   () => {
    //     db.transaction((tx) => {
    //       tx.executeSql(
    //         restoreDatabaseStatement,
    //         [],
    //         (tx, res1) => {
    //           console.log('res1', res1);
    //           console.log('restore successful');
    //         },
    //         (err) => {
    //           console.log('err', err);
    //         },
    //       );
    //     });
    //   },
    //   (res2) => {
    //     console.log('res2', res2);
    //   },
    //   (res3) => {
    //     console.log('res3', res3);
    //   },
    // );
  };

  return (
    <BasicScreen addStyle={styles.addStyle}>
      <View style={styles.view}>
        <Text style={styles.paragraph}>Hier kannst du das ER-Diagramm zur Datenbank betrachten</Text>
        <Button title="Diagramm ansehen" onPress={() => navigation.navigate('ERScreen')} />
      </View>
      <View style={styles.view}>
        <Text style={styles.paragraph}>Hier kannst du die Datenbank zurücksetzen</Text>
        <Button title="Datenbank zurücksetzen" onPress={resetDatabase} />
      </View>
    </BasicScreen>
  );
};
