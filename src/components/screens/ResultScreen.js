import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

import {TableContainer} from '../containers/TableContainer';
import {BasicScreen} from './BasicScreen';

const styles = StyleSheet.create({
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },
});

export const ResultScreen = (props) => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [rowsChanged, setRowsChanged] = useState(0);
  const {route} = props;
  const {statement} = route.params;

  useEffect(() => {
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
              if (res.rowsAffected > 0) {
                setRowsChanged(res.rowsAffected);
              } else {
                const rawResults = res.rows.raw();
                setResults(rawResults);
              }
            },
            (err) => {
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
        <Text style={styles.message}>Ups, da ist etwas schief gelaufen...</Text>
        <Text>{error}</Text>
      </BasicScreen>
    );
  }

  if (rowsChanged) {
    return (
      <BasicScreen>
        <Text style={styles.message}>{`Du hast erfolgreich ${rowsChanged} Zeile${(rowsChanged > 1) ? 'n' : ''} geschrieben`}</Text>
      </BasicScreen>
    );
  }

  if (results) {
    return (
      <BasicScreen>
        <TableContainer results={results} />
      </BasicScreen>
    );
  }

  return null;
};
