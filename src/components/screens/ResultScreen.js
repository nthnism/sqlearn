import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {BasicScreen} from './BasicScreen';

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
    paddingBottom: 20,
  },
});

export const ResultScreen = (props) => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const {route} = props;
  const {statement} = route.params;

  useEffect(() => {
    console.log('useEffect');
    const db = SQLite.openDatabase(
      {
        name: 'chinook.db',
        createFromLocation: '~chinook.db',
      },
      () => {
        db.transaction((tx) => {
          tx.executeSql(
            statement,
            [],
            (tx, res) => {
              const rawResults = res.rows.raw();
              console.log('results', rawResults);
              setResults(rawResults);
            },
            (err) => {
              console.log('error', err);
              setError(err.message);
            },
          );
        });
      },
      null,
      null,
    );
  }, [statement]);

  if (error) {
    return (
      <BasicScreen>
        <Text style={styles.errorMessage}>Ups, da ist etwas schief gelaufen...</Text>
        <Text>{error}</Text>
      </BasicScreen>
    );
  }

  if (results) {
    const stringifiedRes = JSON.stringify(results);

    return (
      <BasicScreen>
        <Text>Hier wird gebaut</Text>
        <Text>{stringifiedRes}</Text>
      </BasicScreen>
    );
  }

  return null;
};
